-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Apr 15, 2022 alle 18:41
-- Versione del server: 10.4.24-MariaDB
-- Versione PHP: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `reporter`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `reports`
--

INSERT INTO `reports` (`id`, `city`, `level`, `img`) VALUES
(12, 'milan', 5, '50d507c53f4eb5037f392b8b8c0d01fa'),
(13, 'miami', 4, 'abe7d5af50718871e3a79e88bd31422c'),
(14, 'miami', 2, '2bae9f4376018e0374e52f2bf2acf4ac'),
(15, 'milan', 6, '5a98eb48d9b7ac58647714d1b680efa3'),
(16, 'london', 6, '4f4b38ac692487ae1096a3472cb93ff6'),
(17, 'manchester', 3, 'fbb21978d169a9fd22a7ce8a8d8460e1'),
(18, 'miami', 6, '0d6277a3f6efc5d4227d4560bf02b48c'),
(19, 'milan', 9, '1bf896b4bb46978debc7dc27abdec579'),
(20, 'manchester', 3, 'a371093f9971a0c3540a7623238c2515');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;
