const Discord = require('discord.js')
const client = new Discord.client()

client.on('Ready', ()=>{
    console.log("봇이 준비되었습니다.")
})
client.on('message', msg=>{
    if(msg.content === '핑'){
        msg.reply('퐁!')
    }
})

client.login('MTAwNjIwMzUwMDMxMDU3MzI2Ng.GZaCHq.f8j5fXR9YmvFmmPx3xlFyna8LlvgJneCfQRZbo')
