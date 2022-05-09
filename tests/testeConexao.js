// 1 - Importar o sequelize
const sequelize = require('sequelize');

// 2 - Elencar os dados para conexão com o BD (usuario, senha, porta, endereco...)

const config = {
    'username': 'root',
    'password':'' ,
    'host': 'localhost',
     'port': '3306',
     'dialect': 'mysql',
     'database': 'escola'
}
const conexao = new sequelize(config)

const promise = conexao.query('SELECT * FROM alunos', sequelize.QueryTypes.SELECT)

// 3 - Criar a conexão com o banco de dados
promise.then((dados) => {
    console.log('Cumpriu a promessa'),
    console.log(dados),
    conexao.close()
}
    )

   

// 4 - Executar uma consulta contra o BD (SELECT * FROM alunos);
promise.catch(() => console.log('Não Cumpriu a promessa'),
        conexao.close()
    )


