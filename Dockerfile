FROM php:7.4-apache

LABEL maintainer="Jerry Wang"

RUN docker-php-ext-install pdo_mysql

COPY app /srv/app

#Apache configuration
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

# PHP COnfiguration
COPY docker/php/php.ini /usr/local/etc/php/php.ini

#Copy our public folder to the working directory
COPY app /srv/app

#Set the working directory
WORKDIR /srv/app