Vagrant.configure("2") do |config|

  config.vm.define "layers"
  config.vm.box = "ubuntu/precise32"
  config.vm.host_name = "vagrant"
  config.vm.network "private_network", ip: "10.24.0.224"
  config.vm.synced_folder "www/", "/var/www"
  
  config.vm.provider "virtualbox" do |v|
    v.customize ["modifyvm", :id, "--memory" , 1024]
  end

  config.vm.provision :puppet do |puppet|
    puppet.manifests_path = "puppet/manifests"
    puppet.manifest_file = "default.pp"
    puppet.module_path = "puppet/modules"
  end

end
