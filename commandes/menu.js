const util = require('util');
const fs = require('fs-extra');
const { wasuke} = require(__dirname + "/../framework/wasuke");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", reaction:"⛩️",categorie: "Général" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//ruok");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLowerCase() != "oui") {
        mode = "privé";
    }

     

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭────✧${RUOK MD}✧────◆
│   *Préfixe* : ${s.PREFIXE}
│   *Owner* : ${s.NOM_OWNER}
│   *Mode* : ${mode}
│   *Commandes* : ${cm.length}
│   *Date* : ${date}
│   *Heure* : ${temps}
│   *Mémoire* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│   *Plateforme* : ${os.platform()}
│   *Développeurs* : MURKY GOJO 
│  & WASUKE D KAMADO 
╰─────✧WA-BOT✧─────◆ \n\n`;
    
let menuMsg = `
👋 salut Fréro ou frangine${nomAuteurMessage} 👋

*Voici la liste de mes commandes :*
◇                             ◇
`;

    for (const cat in coms) {
        menuMsg += `╭────❏ *${cat}* ❏`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│ ${cmd}`;
        }
        menuMsg += `
╰═════════════⊷ \n`
    }

    menuMsg += `
◇            ◇
*»»————— ★ —————««*
Pour utiliser  une  commande, tapez  ${prefixe}"nom de la commande"
 
 powered by WASUKE D KAMADO VII & MURKY GOJO 
                                              
*»»————— ★ —————««*
`;

    
   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Ruok-md*, développé par wasuke kamado" , gifPlayback : true}, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *RUOK-MD*, développé par wasuke Kamado" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
