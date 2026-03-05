const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, PermissionFlagsBits } = require('discord.js');

module.exports = (client) => {

client.on('messageCreate', async message => {
    if (message.content === '.ticket') {

        const embed = new EmbedBuilder()
            .setTitle('Support System')
            .setDescription('Click the button below to open a ticket.')
            .setColor('Blue');

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('open_ticket')
                .setLabel('Open Ticket')
                .setStyle(ButtonStyle.Success)
        );

        message.channel.send({ embeds: [embed], components: [row] });
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'open_ticket') {
        const channel = await interaction.guild.channels.create({
            name: `ticket-${interaction.user.username}`,
            type: ChannelType.GuildText,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel]
                }
            ]
        });

        channel.send(`Welcome ${interaction.user}, staff will assist you.`);
        interaction.reply({ content: 'Ticket created!', ephemeral: true });
    }
});

};