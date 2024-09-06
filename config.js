//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1ROE12WndMSTl4WlY2SjIzYVhxZ1BLR2cxODRDQTAza29wVVJoUFpGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWMwYTJLb25mU0w0eU9mcmRZcXlsRURDUWQwckxITFFWRzlLZmFMOXkwUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRnRHK0QyVHBEZUl3T3hSTEVmSWRhckFoUjM5VVBNdyt4dVpXSERvSEdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwYUgvcnM3VktIbzZBNkZMb2RLN1hVK09tRy9ZVVJRY2Z5RDdUNmVKREdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPMWpuRUlCU3p3NERwQldHY1lWdWFldC9hZnBNQk9KTEk1aVRmbUFiVzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLU3BldW5VTCtLa0pNb1hDU24yUEZndlNhYWd0ZVpIVDVMb1pJdklkV3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU95SGVzelY4SDJaZE5jWmFNQjdKajBuUkhaWk5CSGFoYzZ5MUhyR0xVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzBiMUl0WitGb0F3TkxvaUM1R2lLdVNoMUc4RklPenh2anFIdWdIMmpXcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxMdDBSNUpHY3I1M0tiT0kvR25wUDJQSjRUYVlUejMyZDkyZ2NBUUNTTWNtREpmdFlrUEo1NzV1T25BSC9mY2F3RXZrdnZ4bDhOTnliTHRDOHRxWEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6ImpDTWNVVWVsYmdTSTRha1hJVWJIV3pZTTVaL1JpUFJWSEk4WVF3TldkZ0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkVTdFg2VHp3UTMtMFFFcTFFbWJoNFEiLCJwaG9uZUlkIjoiYWEzNjEyYzUtYjdkOS00ZTMzLWE4YzctNzNjY2RjNjJlNGEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFtZHlwb1QvM0hLZWl2THpONTh4SDBQSmtWRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTG01R3JRU2NzaXZrQ1hUNWFBeHZwcklZME09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR1lWM0dETkQiLCJtZSI6eyJpZCI6IjI3NjU2NDE1OTExOjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNASU5URkxPRVcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s2UXNoWVEwWVBydGdZWUJpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjkzUENYTUVPcGxIeXVtVWh4QTFtOXhUNm9kRXRxNmhPRHJKSmJ6bGNEeGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdmaHVEMTd1YnQvcXZtK0NTMXh5czBEbHp6RTFFR3NUZFdmUG1TVUVlWG1oWDNoOFJvUmR4b3V6RUlUcEdzTGVHY1dqNVNjcmxyK0swTnBmckVGb0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwNmE5RUJDaFlCUSs1NGM0OTBubzUvMlNuNER2TnY2SDdBVHJQMWUxSG10amlwWHFmSVRwZTNkT0N2MWY3RTAzMUh1cjNRTjlQenpoNXA3Q08rYm1BZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjU2NDE1OTExOjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZkendsekJEcVpSOHJwbEljUU5admNVK3FIUkxhdW9UZzZ5U1c4NVhBOFoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU2MTI1MTJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
