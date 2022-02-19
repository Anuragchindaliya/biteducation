-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2022 at 09:04 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `q2w`
--

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `room_id` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `last_modified` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `room_id`, `content`, `created_at`, `last_modified`) VALUES
(1, 'anurag', 'new data for anurag web2rise', '2022-01-20 11:29:45', '2022-02-06 14:26:54'),
(2, 'kapil', 'new data for kapil', '2022-01-20 11:48:29', '2022-02-06 11:51:49'),
(3, 'nitish', 'save data for nitish', '2022-01-20 11:48:46', '2022-01-20 11:48:46'),
(4, 'yogesh', 'save data for yogesh', '2022-01-20 12:19:13', '2022-01-20 12:19:13'),
(5, 'varun', 'save data for varun', '2022-01-20 12:19:33', '2022-01-20 12:19:33'),
(6, 'ratnesh', 'data save for ratnesh123 new data', '2022-01-21 09:13:56', '2022-01-21 09:13:56'),
(8, 'neeraj', 'Hello anurag', '2022-01-21 09:18:45', '2022-01-21 09:18:45'),
(9, 'newroom', '', '2022-02-01 06:37:39', '2022-02-01 06:37:39'),
(10, 'anurag1', '', '2022-02-03 12:05:02', '2022-02-03 12:05:02'),
(11, 'kapil1', 'datafor kapil1jyt', '2022-02-03 12:14:48', '2022-02-04 09:15:19'),
(12, 'kapil2', 'data for kapil2 new data', '2022-02-03 12:15:04', '2022-02-03 12:15:04'),
(13, 'kapil3', '', '2022-02-03 12:16:45', '2022-02-03 12:16:45'),
(14, 'anurag2', '', '2022-02-03 12:17:24', '2022-02-03 12:17:24'),
(15, 'poiu', 'wo', '2022-02-03 12:17:47', '2022-02-03 12:17:47'),
(16, 'poi', '', '2022-02-03 12:18:27', '2022-02-03 12:18:27'),
(17, 'poiu6', '', '2022-02-03 12:18:54', '2022-02-03 12:18:54'),
(18, 'poiu0', '', '2022-02-03 12:19:23', '2022-02-03 12:19:23'),
(19, 'anurag3', '', '2022-02-03 12:23:45', '2022-02-03 12:23:45'),
(20, 'anruag', '', '2022-02-04 11:07:49', '2022-02-04 11:07:49'),
(21, 'kapil!@#$%^&*()', '', '2022-02-04 14:31:55', '2022-02-04 09:11:59'),
(22, 'kapil1yjghk', 'dfsrgf', '2022-02-04 14:59:14', '2022-02-04 09:29:18'),
(23, 'from postman', '', '2022-02-06 11:50:52', '2022-02-06 11:50:52'),
(24, 'xyz', '', '2022-02-06 14:02:30', '2022-02-06 14:02:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `room_id` (`room_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
