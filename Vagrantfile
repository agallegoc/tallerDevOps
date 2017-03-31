# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "DevOps"
#  config.vm.provision "ansible" do |ansible|
#    ansible.playbook = "ckan.yml"
#  end
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "private_network", ip: "192.168.33.43"

  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 1
    v.name = config.vm.hostname.to_s
  end

end
