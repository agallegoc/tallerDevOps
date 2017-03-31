# tallerDevOps 1.0

FROM    ubuntu:latest
MAINTAINER German Martinez <germaaan@gmail.com> Version: 1.0

# Instalar todos los paquetes necesarios para poder realizar realizar el proyecto de CC
RUN apt-get -y install wget
RUN wget -qO- https://deb.nodesource.com/setup_6.x | sudo bash -
RUN sudo apt-get install -y git nodejs
RUN node -v
RUN git clone https://github.com/germaaan/tallerDevOps.git /home/tallerDevOps
RUN cd /home/tallerDevOps && npm install
