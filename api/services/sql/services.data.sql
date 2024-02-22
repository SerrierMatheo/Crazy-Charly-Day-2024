SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users`
(
    `id`         int(11) NOT NULL AUTO_INCREMENT,
    `email`   varchar(128) NOT NULL,
    `password` varchar(128) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;