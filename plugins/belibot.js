let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :      *Rp 0*
╠➥ *1 Bulan* :      *Rp 0*
╠➥ *Permanen* : *Rp 0*
╠➥ *Trial* :   *Rp 0*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Topup/Pin
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klil Button Di Bawah
║
╠═〘 Zeey 〙 ═`.trim(), '❖ Neon-Bot', 'Gopay', '#viadigi', 'Dana', '#viaumobile', m)
}

handler.command = /^sewabot$/i

module.exports = handler
