import { bot } from '../bot.js'

const onStart = (chatId, first_name) => {
	bot.sendMessage(
		chatId,
		`👋 Assalomu alaykum, ${first_name}!

📚 100x o'quv markazining rasmiy botiga xush kelibsiz!

Bu bot orqali siz:
• Kurslarimiz haqida batafsil ma'lumot olasiz  
• Kurslarga onlayn ro‘yxatdan o'tishingiz mumkin  
• Jadval va to'lovlar haqida ma'lumot olasiz  

Quyidagi menyudan kerakli bo'limni tanlang 👇`,
		{
			reply_markup: {
				inline_keyboard: [
					[
						{ text: '📚 Kurslar', callback_data: 'courses' },
						{ text: '✍️ Ro‘yxatdan o‘tish', callback_data: 'register' },
					],
					[
						{ text: 'ℹ️ Markaz haqida', callback_data: 'about' },
						{ text: '💬 Fikr bildirish', callback_data: 'report' },
					],
					[{ text: '❓ Yordam', callback_data: 'help' }],
				],
			},
		}
	)
}

export { onStart }
