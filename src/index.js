import prompt from "prompt";

import promptMain from "./prompts/main.js";

import createQRCode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";

async function main() 
{
  prompt.get(promptMain, async (err, choose) => {
    if (err) console.log(err);

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
  });

  prompt.start();
}

main();