{
  "name": "bot",
  "version": "2.0.0",
  "description": "A wa bot created using Node.js",
  "main": "index.js",
  "scripts": {
    "start": "pm2 start index.js --deep-monitoring --attach --name rpbot",
    "stop": "pm2 stop wabot",
    "restart": "pm2 restart rp"
  },
  "dependencies": {
    "@whiskeysockets/baileys": "6.6.0",
    "@adiwajshing/keyed-db": "^0.2.4",
    "pino": "^7.0.5",
    "pm2": "^5.2.0",
    "util": "^0.12.4",
    "express": "latest",
    "axios": "^1.2.5",
    "file_size_url": "^1.0.4",
    "fs-extra": "^11.1.0",
    "path": "^0.12.7",
    "node-fetch": "^2.6.1",
    "megajs": "^1.1.0",
    "vm": "^0.1.0",
    "qrcode-terminal": "^0.12.0",
    "mongoose": "8.5.4",
    "fluent-ffmpeg": "2.1.3"
  }
      }
