# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 8.0.22)
# Database: nailOllae
# Generation Time: 2021-03-16 05:14:24 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table member
# ------------------------------------------------------------

DROP TABLE IF EXISTS `member`;

CREATE TABLE `member` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` int NOT NULL,
  `balance` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table mypage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `mypage`;

CREATE TABLE `mypage` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `reserveDate` datetime DEFAULT NULL,
  `balance` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `category` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `mypage` WRITE;
/*!40000 ALTER TABLE `mypage` DISABLE KEYS */;

INSERT INTO `mypage` (`id`, `reserveDate`, `balance`, `amount`, `category`)
VALUES
	(1,'2021-02-22 00:00:00',50000,30000,'젤네일');

/*!40000 ALTER TABLE `mypage` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table reservation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `reservation`;

CREATE TABLE `reservation` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `reserveName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `category` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `reserveDate` date NOT NULL,
  `reserveTime` time NOT NULL,
  `dateTime` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;

INSERT INTO `reservation` (`id`, `reserveName`, `category`, `reserveDate`, `reserveTime`, `dateTime`)
VALUES
	(1,'','젤패디','2021-03-10','12:00:00','2021-03-09 13:29:38'),
	(2,'','젤네일','2020-03-05','11:00:00','2021-03-09 13:29:38'),
	(3,'','젤패디','2021-03-11','12:00:00','2021-03-09 13:29:38'),
	(4,'','젤패디','2021-03-19','12:00:00','2021-03-09 13:29:38'),
	(5,'','젤네일','2021-03-11','12:00:00','2021-03-09 13:29:38'),
	(6,'','속눈썹연장','2021-03-11','12:00:00','2021-03-09 13:29:38'),
	(7,'','젤네일','2021-03-13','12:00:00','2021-03-09 13:29:38'),
	(8,'','젤패디','2021-03-12','12:00:00','2021-03-09 13:29:38'),
	(9,'','젤패디','2021-03-11','14:00:00','2021-03-09 13:29:38'),
	(10,'','젤네일','2021-03-11','14:00:00','2021-03-09 13:29:38'),
	(11,'','속눈썹연장','2021-03-11','13:00:00','2021-03-09 13:29:38'),
	(12,'','젤패디','2021-03-19','12:00:00','2021-03-09 13:29:38'),
	(13,'','젤패디','2021-03-12','00:00:11','2021-03-09 13:29:38'),
	(14,'','젤네일','2020-03-05','00:00:11','2021-03-09 13:30:46'),
	(15,'','젤패디','2021-03-19','00:00:13','2021-03-09 13:31:24'),
	(16,'test','이달의아트','2021-03-12','00:00:11','2021-03-09 13:39:30'),
	(17,'test','이달의아트','2021-03-12','00:00:11','2021-03-09 13:51:49'),
	(18,'test','이달의아트','2021-03-11','00:00:11','2021-03-09 13:52:47'),
	(19,'test','젤네일','2021-03-10','00:00:11','2021-03-09 13:54:20'),
	(20,'test','젤네일','2021-03-04','00:00:12','2021-03-09 13:56:31'),
	(21,'test','젤네일','2021-03-05','00:00:11','2021-03-09 13:57:22'),
	(22,'test','젤네일','2021-03-11','00:00:12','2021-03-09 13:58:32'),
	(23,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 13:59:10'),
	(24,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:02:55'),
	(25,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:03:14'),
	(26,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:04:57'),
	(27,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:05:22'),
	(28,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:05:42'),
	(29,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:07:32'),
	(30,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:08:40'),
	(31,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:09:55'),
	(32,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:10:35'),
	(33,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:10:55'),
	(34,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:11:17'),
	(35,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:11:40'),
	(36,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:12:07'),
	(37,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:13:33'),
	(38,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:14:24'),
	(39,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:17:06'),
	(40,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:19:10'),
	(41,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:26:02'),
	(42,'test','이달의아트','2021-03-10','00:00:13','2021-03-09 14:28:32'),
	(43,'test','이달의아트','2021-03-19','00:00:10','2021-03-09 14:28:44'),
	(44,'test','이달의아트','2021-03-19','00:00:10','2021-03-09 14:30:23'),
	(45,'test','젤네일','2021-03-24','00:00:11','2021-03-09 15:03:02'),
	(46,'test','이달의아트','2021-03-19','00:00:10','2021-03-09 15:04:05'),
	(47,'test','이달의아트','2021-03-19','00:00:10','2021-03-09 15:04:47'),
	(48,'test','이달의아트','2021-03-19','00:00:10','2021-03-09 15:05:23');

/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table review
# ------------------------------------------------------------

DROP TABLE IF EXISTS `review`;

CREATE TABLE `review` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `name` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `message` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `date` timestamp NOT NULL,
  `likeCnt` int NOT NULL DEFAULT '0',
  `image` text,
  `category` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;

INSERT INTO `review` (`id`, `title`, `name`, `message`, `date`, `likeCnt`, `image`, `category`)
VALUES
	(20,'계정 목록','신상은','ㄴㄷㄱㄴㄷㄱㄴㄷㄱ','2021-02-23 19:38:21',84,'','이달의 아트'),
	(21,'제목dl','이름','젤네일 너무 예뻐용','2021-03-03 18:57:56',0,'꼬맹이.jpeg','젤네일'),
	(22,'제목dl','이름','젤네일 너무 예뻐용','2021-03-03 18:58:37',0,'꼬맹이.jpeg','젤패디'),
	(26,'789','789','567567','2021-03-09 15:14:29',0,'','');

/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
