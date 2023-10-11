const { version: _version } = require("node:process");
const { SlashCommandBuilder, version, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("botinfo")
		.setDescription("Shows information about the bot"),
	async execute(interaction) {
		const ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
		const ping = Date.now() - interaction.createdTimestamp;

		let totalSeconds = interaction.client.uptime / 1000;
		const d = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		const h = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		const m = Math.floor(totalSeconds / 60);
		const s = Math.floor(totalSeconds % 60);

		const InfoEmbed = new EmbedBuilder()
			.setTitle("Bot Info")
			.setColor(interaction.member.displayHexColor)
			.setTimestamp()
			.addFields(
				{ name: "Bot Name", value: `${interaction.client.user.tag}`, inline: false },
				{ name: "RAM", value: `${ram}MB`, inline: true },
				{ name: "Uptime", value: `${d}d, ${h}h, ${m}m, ${s}s`, inline: true },
				{ name: "Bot Latency", value: `${ping}ms`, inline: true },
				{ name: "API Latency", value: `${interaction.client.ws.ping}ms`, inline: true },
				{ name: "Discord.js", value: `${version}`, inline: true },
				{ name: "Node", value: `${process.version}`, inline: true }
			);

		return interaction.reply({ embeds: [InfoEmbed] });
	},
};
