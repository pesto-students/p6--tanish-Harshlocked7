-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Feb 02, 2023 at 11:05 AM
-- Server version: 10.6.5-MariaDB
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warehouse`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
CREATE TABLE IF NOT EXISTS `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `CITY` varchar(20) NOT NULL,
  `STATE` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `cno` int(11) NOT NULL AUTO_INCREMENT,
  `cname` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `cu_city` varchar(20) NOT NULL,
  PRIMARY KEY (`cno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `itemno` int(11) NOT NULL AUTO_INCREMENT,
  `itemname` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `weight` decimal(10,0) NOT NULL,
  `cost` decimal(10,0) NOT NULL,
  PRIMARY KEY (`itemno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `ono` int(11) NOT NULL AUTO_INCREMENT,
  `odate` date NOT NULL,
  `odateid` int(11) NOT NULL,
  PRIMARY KEY (`ono`),
  KEY `fk_date-id` (`odateid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
CREATE TABLE IF NOT EXISTS `stores` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `store_name` varchar(20) NOT NULL,
  `location_city` varchar(20) NOT NULL,
  `storeid` int(11) NOT NULL,
  `locationcityid` int(11) NOT NULL,
  PRIMARY KEY (`sid`),
  KEY `fk_store_id` (`storeid`),
  KEY `fk-city_id` (`locationcityid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `warehouses`
--

DROP TABLE IF EXISTS `warehouses`;
CREATE TABLE IF NOT EXISTS `warehouses` (
  `wid` int(11) NOT NULL AUTO_INCREMENT,
  `wname` varchar(20) NOT NULL,
  `location` varchar(20) NOT NULL,
  `extra content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`extra content`)),
  `wnameid` int(11) NOT NULL,
  `locationid` int(11) NOT NULL,
  PRIMARY KEY (`wid`),
  KEY `wname` (`wname`),
  KEY `fk_wname` (`wnameid`),
  KEY `fk_locationid` (`locationid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `fk_warehouse_id` FOREIGN KEY (`id`) REFERENCES `warehouses` (`wid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_warehouse_location` FOREIGN KEY (`id`) REFERENCES `warehouses` (`locationid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_warehouse_name` FOREIGN KEY (`id`) REFERENCES `warehouses` (`wnameid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `fk_order_date` FOREIGN KEY (`cno`) REFERENCES `orders` (`odateid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_order_id` FOREIGN KEY (`cno`) REFERENCES `orders` (`ono`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_item_no` FOREIGN KEY (`ono`) REFERENCES `items` (`itemno`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD CONSTRAINT `fk_store_warehuse` FOREIGN KEY (`wid`) REFERENCES `stores` (`storeid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_warehouse_name1` FOREIGN KEY (`wid`) REFERENCES `warehouses` (`wnameid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `warehouses_ibfk_1` FOREIGN KEY (`wid`) REFERENCES `stores` (`sid`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
