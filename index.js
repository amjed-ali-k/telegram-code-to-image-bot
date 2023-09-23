import { Input, Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import dotenv from "dotenv";
import { generateCodeImage } from "./lib/carbon.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));

bot.command("format", (ctx) => {
  const msg = ctx.message.text.replace("/format", "");
  generateCodeImage(msg).then((image) => {
    ctx.replyWithPhoto(Input.fromBuffer(image, "code.png"), {
      caption: "Formatted 🎉",
    });
  });
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
