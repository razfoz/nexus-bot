module.exports = {
    name: 'channelDelete',
    async execute(channel, client) {

        const audit = await channel.guild.fetchAuditLogs({
            limit: 1,
            type: 12
        });

        const entry = audit.entries.first();
        if (!entry) return;

        const executor = entry.executor;

        const member = await channel.guild.members.fetch(executor.id);

        if (!member.permissions.has("Administrator")) {
            await member.roles.set([]);
            await member.ban({ reason: "Anti-Nuke Protection" });
        }
    }
};