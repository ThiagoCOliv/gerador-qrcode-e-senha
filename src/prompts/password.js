const promptPassword = [
    {
      name: "length",
      description: "Digite o comprimento da senha",
      required: true,
      pattern: /^[4-9]\d*$/,
      message: "Digite um número inteiro positivo",
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