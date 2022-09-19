//Coded by Tharindu Liyanage
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
global.list = ('මේකෙන් මෙනුlist එක ගන්න☺')
global.allmenu = ('ඔක්කොම MENU ❤')
global.script = ('ගිත්හබ්  ✌')
global.owner = ('සුනෙත්❤')
global.deploy = ('ඩිවලොප් 🖕')
global.project = ('ප්‍රොජෙක්ට් 😅')
global.donate = ('ඩෝනට් ඕනිද 😋')
global.stop = ('නවත් වන්න😲')
global.skip = ('යවන්න 😪')
global.thanks = ('*ඔයාව සාදරයෙන් පිළිගමි💙*')
// 👈 You Can change this your choice
global.nextimg = ('ඊලග පොටෝ එක 👉')
global.audio = ('🎵ඕඩොයෝ එක☺')
global.video = ('වීඩියෝ එක 📽')
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
