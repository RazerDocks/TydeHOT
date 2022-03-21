const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "t!";

Client.on("ready", () => {
    console.log("Bot prêt")
});


//!Affiche l'ensemble des commandes [Help]
Client.on("messageCreate", message => {
    if (message.content === prefix + "aide"){
        const embed = new Discord.MessageEmbed()
            .setColor("#5100FF")
            .setTitle("Liste des commandes")
            .setDescription("Vous y trouverez la liste des commandes du bot ici")
            .setDescription("**__t!nude__**\n -envoie une nude aléatoirement\n **__t!gif-18__**\n -envoie un GIF -18 aléatoirement\n **Développer par - Mélanie#7930**")

        message.channel.send({ embeds: [embed]});
    }
});

//!Envoie une nude [nude]
Client.on("messageCreate", message => {
    if(message.content === prefix + "nude") {
        const array = ["https://media.discordapp.net/attachments/895410076817453098/895410286369050674/2Q.png", "https://media.discordapp.net/attachments/895410076817453098/895410310280806410/9k.png", "https://media.discordapp.net/attachments/895410076817453098/895410334871977994/9k.png", "https://media.discordapp.net/attachments/895410076817453098/895410366639652964/2Q.png", "https://media.discordapp.net/attachments/895410076817453098/895410462693408788/images.png", "https://media.discordapp.net/attachments/895410076817453098/895410482834464788/images.png", "https://media.discordapp.net/attachments/895410076817453098/895410590321881138/images.png", "https://media.discordapp.net/attachments/895410076817453098/895410691161358367/images.png", "https://media.discordapp.net/attachments/895410076817453098/895410824531812432/images.png", "https://media.discordapp.net/attachments/895410076817453098/895410864717451264/1_Cuul5C.png", "https://media.discordapp.net/attachments/895410076817453098/895410898699685898/images.png", "https://media.discordapp.net/attachments/895410076817453098/895410932593864744/images.png"]
        const image = Math.floor(Math.random() * array.length);
    
        let random = new Discord.MessageEmbed()
        .setTitle("Nude charger aléatoirement !")
        .setImage(array[image])
        .setColor("#5100FF");

        message.channel.send({embeds : [random]})
    }
});

//!Envoie pornoGIF [gif]
Client.on("messageCreate", message => {
    if(message.content === prefix + "gif-18") {
        const array = ["https://images-ext-1.discordapp.net/external/Tf6YNWFikryHKMMJLD-BRUolKXpSYi48eTtILNg21a4/http/juicygif.com/albums/userpics/2020y/02/24/19/1/1602-nude-2.gif?width=330&height=587", "https://images-ext-2.discordapp.net/external/QNncJZOBnZLhT7apAfIC0k356q26glHuxqwzYuNctgU/https/himg.nl/images/sex/907dbc99f6bc5981fc8cfb14923c90b7/original.gif", "https://images-ext-2.discordapp.net/external/YCBz1X-NHSgZmVVi4TUmXBRmEvPPi4P-R46Rth7kVws/https/himg.nl/images/sex/f9f41eed0992da355b3ca0b9a27753ef/original.gif", "https://images-ext-2.discordapp.net/external/crzm-deI87xK-igZuVKS4ONZEM2RAcjwWhYsGGJTusE/https/himg.nl/images/sex/6f2b0f8efa039079f235a0bdbe56445a/original.gif?width=345&height=588", "https://images-ext-2.discordapp.net/external/J8dyHMSPM169LtN33mWTrn0jng_ELTkzgNaiMep8A-g/https/himg.nl/images/sex/998137f5b57b09691d8f120e76d18eee/original.gif", "https://images-ext-1.discordapp.net/external/YVneAJMqkf0POQOCFDKJyjfaPIPGi4_8TlezqosaT8Y/https/porngifs.xxx/wp-content/uploads/2021/05/belle-delphine-porn-gifs-sex-gif.gif", "https://images-ext-2.discordapp.net/external/r30NrAD6Pz2U26t4SumahNv3lfHKOy29gtce9I_9-rk/https/porngifs.xxx/wp-content/uploads/2021/05/unknown-beauty-fucked-porn-gifs-sex-gif.gif?width=330&height=587", "https://images-ext-2.discordapp.net/external/ZKYgm2Hy__hqlEqRFITBirXPmW-iNsrx6rrT-akXZAc/https/porngifs.xxx/wp-content/uploads/2022/03/cock-in-brain-out-porn-gifs-sex-gif.gif", "https://images-ext-2.discordapp.net/external/bbwGiiTZU-e4ak7rP4jLnb4t9S92OpqX9k8HhcVYFkU/https/porngifs.xxx/wp-content/uploads/2022/03/gamergirl-porn-gifs-sex-gif.gif?width=331&height=588"]
        const image = Math.floor(Math.random() * array.length);
    
        let random = new Discord.MessageEmbed()
        .setTitle("Nude charger aléatoirement !")
        .setImage(array[image])
        .setColor("#5100FF");

        message.channel.send({embeds : [random]})
    }
});








Client.login("OTU1Mzc5NDUzMTM0MDA4MzQw.Yjg0cw.w47UZ7gxcj3ycLEXdnmYDTDEt6E");
