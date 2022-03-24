
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Pulsa
╠➥ *62895395165760*
╠➥ Chat Owner:
║- wa.me/62895395165760
╠═〘 Zeey 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viaumobile']
handler.tags = ['info']
handler.command = /^viaumobile$/i

module.exports = handler
