let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
https://chat.whatsapp.com/ICfErl4PbDZIURSqvPVB5K
`.trim(), '❖ Neon-Bot', 'Siap Banh🗿', 'Thanks')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
