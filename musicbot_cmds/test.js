"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*⭕ 𝗖𝗔𝗦𝗘𝗬𝗥𝗛𝗢𝗗𝗘𝗦 𝗜𝗦 𝗢𝗡𝗟𝗜𝗡𝗘⭕* 🙏 \n\n ' + "𝗖𝗔𝗦𝗘𝗬𝗥𝗛𝗢𝗗𝗘𝗦 𝗖𝗔𝗡𝗧 𝗦𝗟𝗘𝗘𝗣⏰⭕";
    let d = '                                                                           𝗛𝗘𝗔𝗟𝗧𝗛 𝗦𝗧𝗔𝗧𝗨𝗦✨';
    let varmess = z + d;
    var mp4 = 'https://i.imgur.com/g44mv83.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
