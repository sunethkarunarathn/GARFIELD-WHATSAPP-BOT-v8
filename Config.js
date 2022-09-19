// 👈 You Can change this your choice 
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🤴'] // 👈 Enter your Emoji 
global.emoji02 = ['❤'] //👈 Enter your Emoji
global.notice = ` *හායි කෝමද ඉතින්☺*
*SUNETH*
*I am 16 years old developer...*
*From Sri Lanka 🇱🇰*
*I am a Learning.*
*my name suneth..*
*Also I am Student*
*Follow My whats app - http://wa.me/+94770378874?text=*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+94768440031'] //👈  Enter Your number
global.premium =  ['+94768440041'] //👈  Enter Your number
global.ownernomer = '+94770378874' //👈  Enter Your number
global.ownername = 'SUNETH' //👈 Enter Your name
global.botname = '❮ＳＵＫＩ ＭＤ❯' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 ＳＵＫＩＤ' //👈 Enter Your Name
global.ig = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8' // 👈 You Can change this your choice
global.region = 'SRI-LANKA, ANURADAPURA, padaviya' // 👈 You Can change this your choice
global.sc = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'ෆලෝ කරන්න ❮❤❯' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'http://wa.me/+94770378874?text='// 👈 Enter your Social media link to follow now button
global.welcome = '*සමූහයට සාදරයෙන් පිළිගමි🙏*' // 👈 You Can change this your choice
global.bye = '*අල්ලන් හිටියේ නෑ යනවනන් පලයන් 😔*' // 👈 You Can change this your choice
global.packname = 'SUKID'  // 👈 You Can change this your choice 
global.author = 'SUNETH DEVELOPMENT' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://telegra.ph/file/aa6468d5b74cf091bdec6.jpg' 
global.spoty = 'https://telegra.ph/file/ef85650aefce7ff31ed9c.jpg'
//Go to https://telegra.ph/file/f23d5a647cf5a3ff64cda.jpg, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'හරි 🙏', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // 👈 You Can change this your choice
    group: 'Feature Used Only For Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "SUKIYA"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
