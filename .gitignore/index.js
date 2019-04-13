const Discord = require('discord.js')
const bot = new Discord.Client()


bot.login(process.env.TOKEN)

//instance
bot.on('ready', function () {
	bot.user.setActivity('!monstres', { type: 'play' })
})


bot.on('message', function (message) {
	if (message.content === '!monstres') {
		let Embed = new Discord.RichEmbed()
			.setDescription("voici la liste des monstres la seul chose a faire pour avoir sa composition est de taper -> !le_nom_du_monstre")
			.setColor("#211edc")
			.addField(">>>Tous les monstres<<<", "\n noceros \nfaucheuse\ndrider\nwyrm\nbetedesneiges\ngriffon\nlarve\ngargantua\nepinator\ntroyen\nailesnoires\nSabrecroc\nailedegivre\ntitan\nmorfalange\nreineabeille \nchaman \ngolem")
			.setFooter("Trop bien ??")
		message.channel.sendEmbed(Embed).then(console.log).catch(console.error)
	}

	
	if (message.content === '!faucheuse') {
		message.channel.send(">>>faucheuse<<< \nChasseur de démon \néclair pourpre \nroublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!drider') {
		message.channel.send(">>>DRIDER<<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!wyrm') {
		message.channel.send(">>>WYRM<<< \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!betedesneiges') {
		message.channel.send(">>>BETES DES NEIGES<<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!griffon') {
		message.channel.send(">>>GRIFFON<<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!larve') {
		message.channel.send(">>>MEGA LARVE<<< \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!gargantua') {
		message.channel.send(">>>GARGANTUA<<< \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!epinator') {
		message.channel.send(">>>EPINATOR<<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!troyen') {
		message.channel.send(">>>TROYEN<<<  \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!ailesnoires') {
		message.channel.send(">>>AILE NOIRE<<<  \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!sabrecroc') {
		message.channel.send(">>>SABRECROC<<< \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!ailedegivre') {
		message.channel.send(">>>AILE DE GRIVE<<<  \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!titan') {
		message.channel.send(">>>TITAN<<< \nincinératrice \nElementalist \nprima \nsage tourmenté \ngobelin")
	}

	if (message.content === '!morphalange') {
		message.channel.send(">>>MORPHALANGE<<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \nombre")
	}

	if (message.content === '!reineabeille') {
		message.channel.send(">>>REINE DES ABEILLES<<<\nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!chaman') {
		message.channel.send(">>>CHAMAN<<< \nChasseur de démon \nEclair pourpre \nRoublard \ntraqueuse \noiseau noir")
	}

	if (message.content === '!golem') {
		message.channel.send(">>>GOLEM<<< \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}

	if (message.content === '!noceros') {
		message.channel.send(">>>Noceros<<< \nincinératrice \nElementalist \nReine de neiges \ngobelin \nprima")
	}



})


