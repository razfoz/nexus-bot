const { DisTube } = require('distube');
const { YtDlpPlugin } = require('@distube/yt-dlp');

module.exports = {
    name: 'play',
    async execute(message, args, client) {

        if (!client.distube) {
            client.distube = new DisTube(client, {
                plugins: [new YtDlpPlugin()]
            });
        }

        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply("Join a voice channel first.");

        const query = args.join(" ");
        if (!query) return message.reply("Provide song name.");

        client.distube.play(voiceChannel, query, {
            textChannel: message.channel,
            member: message.member
        });
    }
};