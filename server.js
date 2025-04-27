// server.js
require('dotenv').config();                  // do odczytu DISCORD_TOKEN z .env
const express = require('express');
const cors = require('cors');
const { Client, Intents } = require('discord.js');

const app = express();
app.use(cors());

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const USER_ID       = '1138522840174436473'; // Twój Discord user ID

// przechowuje bieżący status
let currentStatus = 'offline';

// klient Discorda z obecnościami
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_PRESENCES
  ]
});

client.once('ready', async () => {
  console.log(`Bot zalogowany jako ${client.user.tag}`);
  // spróbuj pobrać wstępny status, jeśli jest w jakiejś wspólnej gildii
  const pres = client.presences.cache.get(USER_ID);
  if (pres) currentStatus = pres.status;
  console.log(`Początkowy status użytkownika: ${currentStatus}`);
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
  if (newPresence.userId === USER_ID) {
    currentStatus = newPresence.status;
    console.log(`Zaktualizowano status: ${currentStatus}`);
  }
});

client.login(DISCORD_TOKEN);

// endpoint zwracający JSON { status: "online" }
app.get('/discord-status', (req, res) => {
  res.json({ status: currentStatus });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer API działa na porcie ${PORT}`);
});
