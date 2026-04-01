const promptPassword = [
    {
      name: "length",
      description: "Digite o comprimento da senha",
      required: true,
      pattern: /\b([4-9]|1[0-2])\b/,
      message: "Digite um número inteiro positivo maior ou igual a 4 e menor ou igual a 12",
    },
    {
      name: "type",
      description: "Escolha entre o tipo de senha (1- NUMÉRICA) ou (2- ALFAUMÉRICA)",
      pattern: /^[1-2]+$/,
      message: "Escolha apenas entre 1 e 2",
      required: true,
    },
];

export default promptPassword;