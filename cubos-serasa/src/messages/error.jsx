const message = {
    nameDontExists: `O nome não foi informado`,
    emailDontExists: `É preciso informar um email`,
    invalidFormatEmail: `O e-mail está com formato invalido`,
    passwordDontExists: `A senha é essencial para segurança da sua conta`,
    passwordFewCharacters: `A senha precisa ter no minimo 6 caracteres`,
    confirmPasswordDontExists: `É preciso confirmar sua senha para a segurança da sua conta`,
    passwordsAreNotTheSame: `As senhas são divergentes`,
    emailAlreadyExists: 'Esse e-mail já foi cadastrado',
    invalidFormatCpfOrPhoneNumber: 'CPF ou telefone estão com formato invalidos',
    userDontUpdate: `Não foi possivel atualizar o usuario, por favor tente novamente.`,
    descriptionDontExists: 'A descrição não foi informada',
    valueDontExists: 'O valor da cobrança não foi informado',
    invalidDate: 'Não é possivel cadastrar um cobrança com a data menor que atual',
    loginWrong: `E-mail ou senha invalidos`,
    invalidValueStatusBill: 'Não é possível excluir um cobrança que já foi paga.',
    invalidDateBill: 'Não é possívil excluir um cobrança já vencida',
    invalidCep: 'Cep não encontrado, por favor informe um cep valido.',
    invalidFormatCep: 'Cep com formato invalido.',
    notFound: 'O servidor não pode encontrar o recurso solicitado',
    badRequest: 'O servidor não entendeu a requisição pois está com uma sintaxe/formato inválido'
};

// 400 (Bad Request) = o servidor não entendeu a requisição pois está com uma sintaxe/formato inválido
// 401 (Unauthorized) = o usuário não está autenticado (logado)
// 403 (Forbidden) = o usuário não tem permissão de acessar o recurso solicitado
// 404 (Not Found) = o servidor não pode encontrar o recurso solicitado

export default message;