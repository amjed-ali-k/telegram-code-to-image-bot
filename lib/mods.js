import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { promises } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sizeOf from "image-size";
import { generateSvgComp } from "./svgComp.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @constructor
 * @param {Buffer} bgImage - Png Image buffer.
 * @typedef  {{ name: string; username: string | number; avatar: any; }} User
 * @param {User} user - User info.
 *
 */
export const getImage = async (bgImage, user) => {
  const inter = await promises.readFile(join(__dirname, "./Inter-Bold.otf"));
  const imgSize = sizeOf(bgImage);

  const options = {
    width: imgSize.width,
    height: imgSize.height + 60,
    fonts: [
      {
        name: "Inter",
        data: inter,
        weight: 600,
        style: "normal",
      },
    ],
  };

  const img = await satori(generateSvgComp(bgImage, user, imgSize), options);
  const resvg = new Resvg(img);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  //   await promises.writeFile(join(__dirname, "./text-out.png"), pngBuffer);
  return pngBuffer;
};
