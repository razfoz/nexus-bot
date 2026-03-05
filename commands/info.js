const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: '-i',
    async execute(message) {

        const user = message.mentions.users.first() || message.author;

        const embed = new EmbedBuilder()
            .setTitle(`${user.username}'s Info`)
            .setThumbnail(user.displayAvatarURL())
            .addFields(
                { name: "ID", value: user.id },
                { name: "Account Created", value: `<t:${Math.floor(user.createdTimestamp/1000)}:R>` }
            )
            .setColor("Green");

        message.channel.send({ embeds: [embed] });
    }
};