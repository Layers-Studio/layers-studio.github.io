class apache {
	package { ['apache2', 'apache2-mpm-prefork']:
		ensure => present;
	}
	file { "/var/lock/apache2":
    	ensure => "directory",
    	owner  => "vagrant",
    	group  => "vagrant",
    	before => Service['apache2'];
    }
	service { 'apache2':
		ensure  => running,
		require => Package['apache2'];
	}
	file { '/var/www/html':
		ensure => absent,
		force => true;
	}
	file { '/var/www/index.html':
		ensure => absent,
		force => true;
	}
	file { '/var/www/logs':
		ensure => directory;
	}
	apache::conf { ['envvars', 'apache2.conf', 'ports.conf']: }
	apache::module { ['headers','alias','rewrite','ssl']: }
}