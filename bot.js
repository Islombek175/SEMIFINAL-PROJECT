import { config } from 'dotenv'
import 'dotenv/config'
import mongoose from 'mongoose'
import TelegramBot from 'node-telegram-bot-api'
import { courseHandler } from './src/courseHandler.js'
import { onStart } from './src/onStart.js'
const token = process.env.BOT_TOKEN
const bot = new TelegramBot(token, { polling: true })
config()

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('DB is connected...')
	})
	.catch(() => {
		console.log('ERROR, DB is not connected...')
	})

bot.on('message', msg => {
	const chatId = msg.chat.id
	const firstName = msg.chat.first_name
	const text = msg.text

	// KOMANDALAR
	switch (text) {
		case '/start':
			onStart(chatId, firstName)
			break
		case '/menu':
			bot.sendMessage(
				chatId,
				"/start - Botni ishga tushirish\n/about - Botimiz haqida ma'lumot\n/menu - Komandalar ro'yxati\n/settings - Botning sozlamalari."
			)
			break
		case '/about':
			bot.sendMessage(chatId, 'Bizning botimizda siz ...')
			break
		case '/settings':
			bot.sendMessage(chatId, 'Botimizning sozlamalari:', {
				reply_markup: {
					inline_keyboard: [
						[
							{
								text: "Tilni o'zgartirish 🇺🇿/🇷🇺/🇺🇸",
								callback_data: 'change_language',
							},
						],
					],
				},
			})
			break
		default:
			break
	}
})

bot.on('callback_query', query => {
	const data = query.data
	const chatId = query.message.chat.id
	bot.answerCallbackQuery(query.id)

	switch (data) {
		case 'courses':
			courseHandler(chatId)
			break
		default:
			break
	}
})

export { bot }
