class usuario {
    constructor(nome, id) { //contrutor possui nome e id, toda vez que o objeto usuario for chamado ele inicia com os valores do contrutor
      this.nome = nome;
      this.id = id;
    }
  } // Essa classe só representa o usuario, só tem uma unica responsabilidade

class usuario_criar {
    constructor() { 
      this.users = []; // matriz criada, vazia onde user vai ser armazenado 
    }
  
    createUser(usuario) { // vai adicior os usuarios(nome e id) a matriz users
      this.users.push(user);
      console.log('Usuário "${user.name}" criado com sucesso.');
    }
}// Essa classe só cria o usuario,também só tem uma unica responsabilidade
