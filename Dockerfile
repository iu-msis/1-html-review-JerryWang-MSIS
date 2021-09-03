#Source: This code is taken from our in-class lecture

#There is an image in php apache and we are using this
FROM php:7.4-apache

#Identifies the maintaner for the REPO
LABEL maintainer="Jerry Wang"

#Set the working directory in the image
WORKDIR /var/www/html

#Copy out public folder to the working directory (.) and (..) means go up a level
COPY public .

