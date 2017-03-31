#!/bin/bash

ssh-copy-id -i ~/.ssh/id_rsa.pub vagrant@192.168.33.43
ansible playbook --inventory-file=./hosts -u vagrant -m ping
ansible playbook --inventory-file=./hosts -u vagrant -m shell -a 'uname -a'
ansible-playbook --inventory-file=./hosts -become playbook.yml
