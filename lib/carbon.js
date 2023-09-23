// import { exec } from "child_process";
import axios from "axios";

export const generateCodeImage = async (code) => {
  const res = await axios.post(
    "https://carbonara.solopov.dev/api/cook",
    {
      code,
    },
    {
      responseType: "arraybuffer",
    }
  );

  return Buffer.from(res.data, "binary");
};
