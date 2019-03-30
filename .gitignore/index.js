const Discord = require('discord.js')
const bot = new Discord.Client()


bot.login(process.env.TOKEN)

//instance
bot.on('ready', function () {
	bot.user.setActivity('YouTube', { type: 'WATCHING' })
})


bot.on('message', function (message) {
	if (message.content === '!monstres') {
		let Embed = new Discord.RichEmbed()
			.setDescription("voici la liste des monstres la seul chose a faire pour avoir sa composition est de taper -> !le_nom_du_monstre")
			.setColor("#211edc")
			.addField(">>>Tous les monstres<<<", "\n Noceros \nfaucheuse\ndrider\nwyrm\nbete-des-neiges\ngriffon\nlarve\ngargantua\nepinator\ntroyen\nailes-noires\nSabrecroc\naile-de-givre\ntitan\nmorfalange\nreine-abeille \nchaman \ngolem")
			.setFooter("Trop bien ??")
		message.channel.sendEmbed(Embed).then(console.log).catch(console.error)
	}

	
	if (message.content === '!faucheuse') {
		message.channel.send(">>>faucheuse<<< \nChasseur de démon \néclair pourpre \nroublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!drider') {
		message.channel.send(">>><<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!wyrm') {
		message.channel.send(">>><<< \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!bete-des-neiges') {
		message.channel.send(">>><<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!griffon') {
		message.channel.send(">>><<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!larve') {
		message.channel.send(">>><<< \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!gargantua') {
		message.channel.send(">>><<< \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!epinator') {
		message.channel.send(">>><<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!troyen') {
		message.channel.send(">>><<<  \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!aile-noir') {
		message.channel.send(">>><<<  \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!sabrecroc') {
		message.channel.send(">>><<< \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!aile-de-givre') {
		message.channel.send(">>><<<  \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!titan') {
		message.channel.send(">>><<< \nincinératrice \nElementalist \nprima \nsage tourmenté \ngobelin")
	}

	if (message.content === '!morphalange') {
		message.channel.send(">>><<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \nombre")
	}

	if (message.content === '!reine-abeille') {
		message.channel.send(">>><<<\nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!chaman') {
		message.channel.send(">>><<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!golem') {
		message.channel.send(">>><<< \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!Noceros') {
		message.channel.send(">>>Noceros<<< \nincinératrice \nElementalist \nReine de neiges \ngobelin \nprima")
	}



})


