define apache::module() {
	exec { "a2enmod ${name}":
    	command => "/usr/sbin/a2enmod ${name}",
    	require => Package['apache2'],
		notify  => Service['apache2'];
  	}
}
