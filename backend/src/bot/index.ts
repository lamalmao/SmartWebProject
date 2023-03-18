import { Telegraf } from 'telegraf';
import { Types } from 'mongoose';
import userModel from '../models/user/index.js';
import logger from '../logger.js';
import settings from '../settings.js';

const notificationBot = new Telegraf(settings.bot.apiKey);

notificationBot.start(async ctx => {
  try {
    const userId = new Types.ObjectId(ctx.message.text.split(' ')[1]);
    if (!userId) {
      return;
    }

    const user = await userModel.findById(userId);
    if (!user) {
      await ctx.reply('Пользователь не найден');
      return;
    }

    user.telegram = ctx.from.id;
    user.save().catch(err => logger.error(err));

    if (user.activated) {
      await ctx.reply('Ваш аккаунт уже активирован');
    }

    if (!user.confirmationCode) {
      return;
    }

    if (!user.confirmationCode.active) {
      await ctx.reply('Код уже активирован');
      return;
    }

    await ctx.reply(`Код активации аккаунта **${user.username}**: \`${user.confirmationCode.value}\``, {
      parse_mode: 'MarkdownV2'
    });
  } catch (e) {
    logger.error(e);
  }
});

export default notificationBot;