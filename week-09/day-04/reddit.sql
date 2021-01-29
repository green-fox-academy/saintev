-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: reddit
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(256) DEFAULT NULL,
  `url` varchar(256) DEFAULT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  `score` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Crockford','http://9gag.com','2021-01-18 10:51:25',2),(2,'Dear JavaScript','http://9gag.com','2021-01-18 10:52:35',2),(4,'BBC debate','https://www.youtube.com/watch?v=ykbPLogCJs8','2021-01-18 11:41:53',4),(20,'Ricky takes his Emmy back','https://www.youtube.com/watch?v=RZp6cR4bxbY','2021-01-23 16:07:59',1),(21,'Ricky','https://www.youtube.com/watch?v=1CYi5T0yTl4','2021-01-23 16:08:28',1),(26,'Liam improvisation','https://www.youtube.com/watch?v=huJ81Mq2y34','2021-01-23 22:25:00',1),(27,'matreviews','https://github.com/green-fox-academy/ego-syllabus/blob/main/CA/ego-youtube/public/index.js','2021-01-23 23:03:45',1),(32,'A complete guide to flexbox','https://css-tricks.com/snippets/css/a-guide-to-flexbox/','2021-01-23 23:56:24',1),(34,'BBC debate with EarthlingEd','https://www.youtube.com/watch?v=ykbPLogCJs8','2021-01-25 14:35:22',1),(35,'Creating databases','https://wtools.io/','2021-01-26 14:33:36',0),(41,'aes','asdf','2021-01-26 14:37:19',0),(42,'MySQL CheatSheet','https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3','2021-01-26 14:42:11',0),(43,'Octopus Intelligence','https://www.youtube.com/watch?v=dKWssIQplw8&t=22s','2021-01-29 10:33:38',0),(44,'Octopus Intelligence','https://www.youtube.com/watch?v=dKWssIQplw8&t=22s','2021-01-29 10:47:16',0),(45,'asd','asd','2021-01-29 10:48:32',0),(46,'asdf','dsf','2021-01-29 10:49:45',0),(47,'asdf','asdf','2021-01-29 10:52:18',0),(48,'asdf','sadf','2021-01-29 10:59:57',0),(49,'Octopus Intelligence','https://www.youtube.com/watch?v=dKWssIQplw8&t=22s','2021-01-29 11:02:56',0),(50,'Scientists discover new fish species','https://www.youtube.com/watch?v=h1dxMTLStMQ','2021-01-29 11:05:09',0),(51,'How deep is the ocean?','https://www.youtube.com/watch?v=UwVNkfCov1k','2021-01-29 11:07:01',0),(52,'10 friendliest sharks in the ocean','https://www.youtube.com/watch?v=4kYOZgINijU','2021-01-29 11:09:56',0),(53,'Relaxing ocean theme','https://www.youtube.com/watch?v=cC9r0jHF-Fw','2021-01-29 11:31:30',0);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-29 11:45:01
