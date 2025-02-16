-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: finalproject
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test','test@gm.com','123456','user'),(2,'Parthesh Trivedi','parthesh123@gmail.com','test123','user'),(10,'Parthesh','test30@gmail.com','123456','user'),(11,'PAR','test45@gmail.com','$2b$10$9ubTZDwyAhJypsHwHylQd.a8805HKN7NkqPPwlblB5OU.25ZbgjGO','admin'),(18,'navya','tese345rtgfgbt45@gmail.com','$2b$10$CmlIGFCzutkFbfLxD1AupOmIEaHQBUD/VtpixgvvDlBqyve3fwosi','admin'),(20,'nishil patel','nishill@gmail.com','$2b$10$AkIGZDcXL2.VfjIKIhHoDeN7TiNnzkCqcjAc/CDDu2k24FSFfDnjy','admin'),(26,'navyashah','navyashas1219@gmail.com','$2b$10$ZYYnM14SxltvV2I8nf1.1.GpOsVFUuZkMoiuqKk9PRJjfD23DPfpu','user'),(29,'njking','njking1219@gmail.com','$2b$10$be1ePzn6jzg6//8CelJMReC6eIz5d7057yX.GXLNp/yDwBjbGmg9O','user'),(30,'pt84','test55@gmail.com','$2b$10$vMz6uHRmmMJHJKt3Q61PK.aLo2neoyINH0dU0tOl2KoAIdOnlo7bW','admin'),(31,'rt','test33@gmail.com','123456','admin'),(32,'ET2','test678@gmail.com','123456','admin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-16 17:57:06
