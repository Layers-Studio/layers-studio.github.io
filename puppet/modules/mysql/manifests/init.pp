class mysql {
	package { ['mysql-server']:
		ensure => present;
	}
	service { 'mysql':
		ensure  => running,
		require => Package['mysql-server'];
	}
	file { '/etc/mysql/my.cnf':
		source  => 'puppet:///modules/mysql/my.cnf',
		require => Package['mysql-server'],
		notify  => Service['mysql'];
	}
	exec { 'set-mysql-password':
		unless  => 'mysqladmin -uroot -proot status',
		command => "mysqladmin -uroot password root",
		path    => ['/bin', '/usr/bin'],
		require => Service['mysql'];
	}
	exec { 'create-database-sql':
		command => 'mysql -u root -proot < /vagrant/sql/create.sql',
		path    => ['/bin', '/usr/bin'],
		require => Exec['set-mysql-password'];
	}
	exec { 'load-dynamic-sql':
		command => 'mysql -u root -proot -D layers < /vagrant/sql/database.sql',
		path    => ['/bin', '/usr/bin'],
		require => Exec['create-database-sql'];
	}
	exec { 'create-user-sql':
		command => 'mysql -u root -proot -D layers < /vagrant/sql/user.sql',
		path    => ['/bin', '/usr/bin'],
		require => Exec['load-dynamic-sql'];
	}
}