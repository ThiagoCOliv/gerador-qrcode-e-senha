import defineCharacters from "./utils/defineCharacters.js";

async function handle(err, result) 
{
    let password = "";

    let characters = await defineCharacters(result.type === "1");

    do { password += characters[Math.floor(Math.random() * characters.length)] }
    while (password.length < result.length);

    console.log(password);
}

export default handle;