async function defineCharacters(numerical) 
{
    let characters = ["0","1","2","3","4","5","6","7","8","9"];

    if (!numerical) characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_");
    
    return characters;
}

export default defineCharacters;