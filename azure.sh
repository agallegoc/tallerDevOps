sudo npm install -g azure-cli

azure account download
azure account import cuenta.publishsettings
rm cuenta.publishsettings

azure account list
azure storage account create germaaandevops --type LRS --location "Central US"
azure storage account keys list germaaandevops
export AZURE_STORAGE_ACCOUNT=germaaandevops
export AZURE_STORAGE_ACCESS_KEY={CLAVE}

azure vm image list | grep Ubuntu_DAILY_BUILD-xenial-16_04
azure vm create germaaandevops b39f27a8b8c64d52b05eac6a62ebad85__Ubuntu_DAILY_BUILD-wily-15_10-amd64-server-20160123-en-us-30GB --location "Central US" --vm-size Small --ssh --userName germaaan --password {PASSWORD}

azure vm list

azure vm start germaaandevops

azure vm shutdown germaaandevops
