import { Input, Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { generateCodeImage } from "./lib/carbon.js";
import { getImage } from "./lib/mods.js";
import pino from "pino";
import pretty from "pino-pretty";
import express from "express";

const logger = pino(
  pretty({
    colorize: true,
    colorizeObjects: true,
  })
);

const defaultAvatar = "https://avatars.githubusercontent.com/u/124599?v=4";
const bot = new Telegraf(process.env.BOT_TOKEN);

const port = process.env.PORT || 3000;
const webhookDomain =
  process.env.DETA_SPACE_APP_HOSTNAME ||
  process.env.WEBHOOK_DOMAIN ||
  "https://example.com";

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

bot.start((ctx) => ctx.reply("Welcome to Code Beautifier Bot"));
bot.help((ctx) => ctx.reply("Send me a code to beautify"));

bot.on(message("text"), async (ctx) => {
  const botUserName = "@" + bot.botInfo.username;
  if (ctx.message.chat.type !== "private") {
    if (
      !ctx.message.text.includes(botUserName) &&
      !ctx.message.text.includes("/format")
    )
      return;
  }

  let msg = "";
  let _user = {};

  // check is the message is a reply
  if (ctx.message.reply_to_message) {
    logger.info(`Reply message recieved from ${ctx.message.from.username}`);
    // if (!ctx.message.reply_to_message.from.is_bot) return;
    if (!ctx.message.reply_to_message.text) return;
    msg = ctx.message.reply_to_message.text
      .replace(botUserName, "")
      .replace("/format", "");
    _user = ctx.message.reply_to_message.from;
  } else {
    logger.info(`Message recieved from ${ctx.message.from.username}`);
    if (!ctx.message.text) return;
    msg = ctx.message.text.replace(botUserName, "").replace("/format", "");
    _user = ctx.message.from;
  }
  const codeImage = generateCodeImage(msg);
  const avatar = getAvatar(ctx, _user.id);

  const image = await getImage(await codeImage, {
    name: _user.first_name + " " + (_user.last_name || ""),
    username: _user.username ? `@${_user.username}` : _user.id,
    avatar: await avatar,
  });

  ctx.replyWithPhoto(Input.fromBuffer(image, "code.png"), {
    caption: "Here is your code 🎉",
  });
});

const app = express();
app.use(await bot.createWebhook({ domain: "https://" + webhookDomain }));
app.listen(port, () => console.log("Listening on port", port));

async function getAvatar(ctx, id) {
  try {
    const userAvatar = await ctx.telegram.getUserProfilePhotos(id);
    const avatarId = userAvatar.photos[0][0].file_id;
    const avatar = await ctx.telegram.getFileLink(avatarId);
    return avatar.toString() || defaultAvatar;
  } catch (error) {
    return defaultAvatar;
  }
}
