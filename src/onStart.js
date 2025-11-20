import { bot } from '../bot.js'

const onStart = (chatId, first_name) => {
	bot.sendMessage(
		chatId,
		`👋 Assalomu alaykum, ${first_name}!

📚 100x o‘quv markazining rasmiy botiga xush kelibsiz!

Bu bot orqali siz:
• Kurslarimiz haqida batafsil ma’lumot olasiz  
• Kurslarga onlayn ro‘yxatdan o‘tishingiz mumkin  
• Jadval va to‘lovlar haqida ma’lumot olasiz  

Quyidagi menyudan kerakli bo‘limni tanlang 👇`
	)
}

export {onStart}