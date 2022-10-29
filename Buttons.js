//Coded by Tharindu Liyanage
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
global.list = ('🍭🅻🅸🆂🆃 🅼🅴🅽🆄🍭')
global.allmenu = ('📍🅰🅻🅻 🅼🅴🅽🆄📍')
global.script = ('ගිත්හබ්  ✌')
global.owner = ('➢SUNETH➢')
global.deploy = ('❤𝐒𝐔𝐍𝐄𝐓𝐇+?')
global.project = ('𝐦𝐲 𝐥𝐢𝐟𝐞 𝐦𝐲 𝐫𝐮𝐥𝐞𝐬')
global.donate = ('❮𝐝𝐨𝐧𝐚𝐭𝐬❯')
global.stop = ('නවත් වන්න😲')
global.skip = ('යවන්න 😪')
global.thanks = ('*➢ 𝘞𝘌𝘓𝘊𝘖𝘔𝘌 𝘠𝘖𝘜.➢ඔයාව සාදරයෙන් පිළිගමි💙*')
// 👈 You Can change this your choice
global.nextimg = ('➢𝘕𝘌𝘟𝘛 𝘐𝘔𝘈𝘎𝘌➢')
global.audio = ('➢𝘈𝘜𝘋𝘌𝘖➢')
global.video = ('𝐯𝐢𝐝𝐞𝐨')
global.yts = ('යූටියුබ් සර්ච් 🧐')
global.play = ('පටන්ගමු ⛰️')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
