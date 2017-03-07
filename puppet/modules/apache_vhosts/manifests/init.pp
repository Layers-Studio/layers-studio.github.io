class apache_vhosts {
	file { '/var/www':
		ensure => directory;
	}
	apache_vhosts::vhost { ['default','default-ssl']: }
}
