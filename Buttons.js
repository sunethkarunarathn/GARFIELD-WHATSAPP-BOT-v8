//Coded by Tharindu Liyanage
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
global.list = ('➢𝘓𝘐𝘚𝘛 𝘔𝘌𝘕𝘜➢')
global.allmenu = ('➢𝘈𝘓𝘓 𝘔𝘌𝘕𝘜➢')
global.script = ('ගිත්හබ්  ✌')
global.owner = ('➢SUNETH➢')
global.deploy = ('➢𝘋𝘌𝘝𝘖𝘓𝘖𝘗𝘐𝘕𝘎➢')
global.project = ('ප්‍රොජෙක්ට් 😅')
global.donate = ('ඩෝනට් ඕනිද 😋')
global.stop = ('නවත් වන්න😲')
global.skip = ('යවන්න 😪')
global.thanks = ('*➢ 𝘞𝘌𝘓𝘊𝘖𝘔𝘌 𝘠𝘖𝘜.➢ඔයාව සාදරයෙන් පිළිගමි💙*')
// 👈 You Can change this your choice
global.nextimg = ('➢𝘕𝘌𝘟𝘛 𝘐𝘔𝘈𝘎𝘌➢')
global.audio = ('➢𝘈𝘜𝘋𝘌𝘖➢')
global.video = ('➢𝘝𝘐𝘋𝘌𝘖➢')
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
