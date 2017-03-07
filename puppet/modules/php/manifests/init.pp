class php {
	package {
		[
			'php5',
			'php5-cli',
			'libapache2-mod-php5',
			'php-apc',
			'php5-mysql',
			'php5-curl',
			'php5-gd',
			'php5-imagick',
			'php5-mcrypt',
			'php5-memcache'
		]:
		ensure => present;
	}
	file {
		'/etc/php5/apache2':
		ensure => directory,
		before => File ['/etc/php5/apache2/php.ini'];

		'/etc/php5/apache2/php.ini':
		source  => 'puppet:///modules/php/php.ini',
		require => Package['php5'];

		'/etc/php5/cli':
		ensure => directory,
		before => File ['/etc/php5/cli/php.ini'];

		'/etc/php5/cli/php.ini':
		source  => 'puppet:///modules/php/cli-php.ini',
		require => Package['php5-cli'];
	}
}