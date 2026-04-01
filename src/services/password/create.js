import prompt from "prompt";
import handle from "./handle.js";
import promptPassword from "../../prompts/password.js";

async function createPassword() 
{
  prompt.get(promptPassword, handle);
  prompt.start();
}

export default createPassword;