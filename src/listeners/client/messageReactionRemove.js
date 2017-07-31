const { Listener } = require('discord-akairo');

class MessageReactionRemoveListener extends Listener {
	constructor() {
		super('messageReactionRemove', {
			eventName: 'messageReactionRemove',
			emitter: 'client',
			category: 'client'
		});
	}

	async exec(reaction, user) {
		if (reaction.emoji.name === '⭐') {
			const starboard = this.client.starboards.get(reaction.message.guild.id);
			const error = await starboard.remove(reaction.message, user);
			if (error) {
				reaction.message.channel.send(`${user}, ${error}`);
			}
		}
	}
}

module.exports = MessageReactionRemoveListener;
