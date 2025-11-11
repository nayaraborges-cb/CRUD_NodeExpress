#### Roteiro que utilizei para executar a prática 
Este arquivo contém os passos seguidos na criação e teste na aplicação simples do CRUD

#### Disposição dos arquivos:
<img width="140" height="385" alt="image" src="https://github.com/user-attachments/assets/58f38d92-3b1d-42fb-8730-4fea9a660a17" />

#### Ferramentas de desenvolvimento:
Tudo foi feito pelo VS Code, inclusive o uso da extensão Thunder Client para criar requisições (GET, POST, PATCH, DELETE)
Sobre instalações:
* Ferrametas para o uso do Node
* Sequelize
  * npm install --save sequelize
  * npm install --save pg pg-hstore # Postgres  
* PostgreSQL - npm install pg

#### Observações:
* Por força do ábito quase usei **app.get** mas por ser node e não apenas Javascript usei o async/await por causa do banco de dados e imaginando o uso em projetos reais
* O banco de dados utilizado foi o Postgresql
  * Seu arquivo está na pasta neste repositório com a finalidade de ilustrar sua existência e utilização
*  As dúvidas que tive resolvi por meio de pesquisas e ajuda de colegas
*  Um dos materiais adicionais que utilizei para estudos antes de desenvolver essa prática foram:
  *  Vídeo aula disponível em: https://youtu.be/6Y1cMlTPEaE?si=WAbRlh9qs-mFL3lG
  *  Artigo sobre async disponível em: https://cursos.alura.com.br/forum/topico-async-await-515225
  *  Artigo sobre criação de API com Node.js, PostgreeSQL e Padrão MVC disponível em: https://dev.to/mpfdev/guia-para-iniciantes-criando-uma-api-com-nodejs-postgresql-e-padrao-mvc-4027
  *  Sobre paginação: https://www.youtube.com/watch?v=avUCPbWppgQ

#### Padrão MVC
Acredito que o foco desse caso era o back end por isso há pastas apenas de Model e Controller e a View é a interação com o HTTP
