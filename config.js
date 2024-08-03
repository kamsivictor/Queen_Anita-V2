//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "sudo";
global.owner = process.env.OWNER_NUMBER || "2349138914032";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlMbndPdGN2eURhaFRaWnFDUEdJMW52cEhWYlJZOUQvdzJjZFFTenNuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnIrRytOV001SDhHcDJYOGtodU1WeHpnOTlkU3ZBYVhXMlAxaDRGWG0yYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLT2JDU0ZQL1I2dUhLM2g1L3I1MHN4RVB2V1g5ZVBiMnZHSUtJaXlnc1ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvWFlhKzllNVpZWnZwVVJabXVCQS9JYjQzZ040OU9EVVVucWJibVdIaHlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdHVHkyN3dxdjRLNW96TWtLa3pPTE9yM2xxajNPOEtMaFZ0MlpRSW9aR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ6c1ZvWjhuQkxTT0liV2VZd3ZqZXB5K1crM3FYV095ZUtSNnpSNXhiRFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBiajJ1ejNkN3VmVTJ4NE9LVFRudkFUVGZjdEZMTktJQzAveStnSU5Hcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkR1Q2U4VjhyUVNCVWJmd2VxYXZrUW9jdDcrV2Y5VDVHaE9EZzd3em4xVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR4OHFRTi9pM0VRMXJuZmFQdnlDL1YyLzNiU1YxTnJIOXRaMzlnZloxajMwMjFiSldhc3gxS3ZiTkZyN20rcjJGQXhReHhwRE1BemVHZUZ5eVUrRGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6IlgwMEIzdGgwSUNLQkczNzM1L2tzRGhhYytMVGw0dW5mb2U2Y1JJZmRYNkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkV1Sm51cE1XUzQ2SElZcHVyZ3c1ZlEiLCJwaG9uZUlkIjoiMWRmNWI2NzctODYyZS00NjI2LWExOGEtYjhiOWE2Mzk2MmE1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE0cG4xRllvREl3TzgyQlRHZHRBQ2k5TjhrRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrU3crN0hTRjBYRmE1NjhXcXNlNGdoME5TU0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTUySjM2NDQiLCJtZSI6eyJpZCI6IjIzNDkxMzg5MTQwMzI6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSsO4xZ9oIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJYXc1b3NERUlhNHVyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvdWlMN0VDM1ZpLzJvQXByNlBSUmxIME53WU00eGFTT09vSkl4SisyUFEwPSIsImFjY291bnRTaWduYXR1cmUiOiJpYTFrelBHaktTWFVPRmw3enNZY0tucHRIdUJwbGtvd2xlaGRzWUd1bU9WSzFQMlVEdWJ2R3VFUW1XN3ptYzREMlNnZWY0NTRkN3B4QXhwQy93Z2ZDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidkpGMnptZlU1RG9Rb3htNHZIVlpyUUdPakJ4NFVDeTZIKzRiRi8rbmJVZndJNm5OdVNZd1BxL3ZWUldMeFRROW90Y2ora09ES0YrcE1HazlnSWE4Z1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTM4OTE0MDMyOjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmY3b2kreEF0MVl2OXFBS2ErajBVWlI5RGNHRE9NV2tqanFDU01TZnRqME4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI3MTkyNTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSnVaIn0=
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "kamsi",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
