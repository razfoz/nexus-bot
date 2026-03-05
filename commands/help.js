const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    async execute(message) {

        if (!message.member.permissions.has("Administrator"))
            return message.reply("Admins only.");

        const embed = new EmbedBuilder()
            .setTitle("Admin Control Panel")
            .setDescription(`
            🎫 .ticket → Setup ticket system
            🎵 .play → Play music
            👤 -i → User Info
            🛡 Anti-nuke is active
            `)
            .setColor("Purple");

        message.channel.send({ embeds: [embed] });
    }
};