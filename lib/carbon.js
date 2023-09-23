// import { exec } from "child_process";
import axios from "axios";
import Color from "colorjs.io";

const c1 = new Color("rebeccapurple");
const gradient = c1.range(new Color("lch", [85, 85, 85 + 720]), {
  space: "lch",
  hue: "decreasing",
});

export const generateCodeImage = async (code) => {
  const res = await axios.post(
    "https://carbonara.solopov.dev/api/cook",
    {
      code,
      backgroundColor: gradient(Math.random()).toString({ format: "hex" }),
      prettify: true,
      paddingHorizontal: "30px",
      paddingVertical: "30px",
    },
    {
      responseType: "arraybuffer",
    }
  );

  return Buffer.from(res.data, "binary");
};
