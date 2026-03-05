const { ActivityType } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {

        console.log(`✅ Logged in as ${client.user.tag}`);

        // Set bot status
        client.user.setPresence({
            activities: [{
                name: "Protecting the server 🛡",
                type: ActivityType.Watching
            }],
            status: "online"
        });

    }
};
