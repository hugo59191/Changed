const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();


const adapter = new FileSync('database.json');
const db = low(adapter);

var prefix = ("sigbot!")


bot.on('ready', function() {
    bot.user.setUsername("NAME")
    bot.user.setPresence({ game: { name: 'Transfurrer quelques humains'}, status: 'online'})
    console.log("Connected")});

bot.login(process.env.TOKEN);



bot.on('message', message => {
    if(message.content.startsWith(prefix + "DM")) {

        if(message.mentions.users.first()){

        let messageToSend = message.content.split(" ").slice(2).join(" ");
        let userToSend = message.mentions.users.first();

        userToSend.send(`${message.author.username} vous a envoyer un message!\n${messageToSend}`);
        message.delete(`${message.author.username} vous a envoyer un message!\n${messageToSend}`);
        message.channel.send(`**${message.author}** , votre message a bien été envoyer a **${message.mentions.users.first().username}** :D`)
}else{
    message.delete();
    message.channel.send(`erreur`)

}
}
}
)
