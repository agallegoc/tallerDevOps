wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku login

git clone https://github.com/germaaan/tallerDevOps.git
cd tallerDevOps

heroku apps:create --region eu tallerDevOps

https://tallerDevOps.herokuapp.com/
