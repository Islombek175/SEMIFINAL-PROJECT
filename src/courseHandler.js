import { bot } from '../bot.js'

const courseHandler = chatId => {
	bot.sendMessage(chatId, 'Kursalar')
}

export { courseHandler }
