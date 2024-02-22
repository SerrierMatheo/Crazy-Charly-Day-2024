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
    `nom` varchar(128) NOT NULL,
    `nbDemande` integer(1),
    `ordre1` varchar(2),
    `ordre2` varchar(2),
    `ordre3` varchar(2),
    `ordre4` varchar(2),
    `ordre5` varchar(2),
    `ordre6` varchar(2),
    `is_admin` bool not null,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;