import TelegramBot from 'node-telegram-bot-api'
const token = process.env.BOT_TOKEN

const bot = new TelegramBot(token, { polling: true })

bot.on('message', msg => {
	const chatId = msg.chat.id
	const userName = msg.chat.username
	const text = msg.text

	// KOMANDALAR
	switch (text) {
		case '/start':
			bot.sendMessage(
				chatId,
				`Assalamu aleykum ${userName}, botimizga xush kelibsiz.🎉\ Ko'proq ma'lumot olish uchun /menu komandasini yuboring.`
			)
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
	// bot.answerCallbackQuery(query.id)

	// TILNI TANLASH
	switch (data) {
		case 'change_language':
			bot.sendMessage(chatId, 'Iltimos bir tilni tanlang:', {
				reply_markup: {
					inline_keyboard: [
						[{ text: 'Uzbek 🇺🇿', callback_data: 'Uz' }],
						[{ text: 'Russian 🇷🇺', callback_data: 'Ru' }],
						[{ text: 'English 🇺🇸', callback_data: 'En' }],
					],
				},
			})
			break
		case 'Uz':
			bot.sendMessage(chatId, "Siz O'zbek tili ni tanladingiz 🇺🇿")
			break
		case 'Ru':
			bot.sendMessage(chatId, 'Siz Rus tili ni tanladingiz 🇷🇺')
			break
		case 'En':
			bot.sendMessage(chatId, 'Siz Ingliz tili ni tanladingiz 🇺🇸')
			break
		default:
			break
	}
})
