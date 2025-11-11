const books_model = require("../model/books_model.js");

const books_controller  = {
  listar: async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const { count, rows } = await books_model.findAndCountAll({
            order: [["id", "ASC"]],
            limit,
            offset
        });

        return res.status(200).json({
            mensagem: "Lista de livros obtida com sucesso",
            totalLivros: count,
            paginaAtual: page,
            totalPaginas: Math.ceil(count / limit),
            livros: rows
        });

        
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar livros" });
    }
  },

  inserir: async (req, res) => {
    try {
      const { titulo, autor, genero, ano_publicacao, resumo } = req.body;
      if (!titulo || !autor || !genero || !ano_publicacao) {
        return res.status(400).json({ error: "Todos os campos obrigatórios devem ser preenchidos" });
      }

      const novoLivro = await books_model.create({ titulo, autor, genero, ano_publicacao, resumo });
      return res.status(201).json({ message: "Livro cadastrado com sucesso!", data: novoLivro });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao cadastrar o livro" });
    }
  },

  buscarPorId: async (req, res) => {
    try {
      const livros = await books_model.findByPk(req.params.id);
      if (!livros) return res.status(404).json({ error: "Livro não encontrado" });
      return res.status(200).json({ message: "Livro encontrado com sucesso", data: livros });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao buscar o livro" });
    }
  },

    atualizar: async (req, res) => {
       try {
        const livro = await books_model.findByPk(req.params.id);
        if (!livro) {
            return res.status(400).json({mensagem: "Livro não encontrado."});
        }

        await livro.update(req.body);
        return res.status(200).json({mensagem: "Livro atualizado com sucesso!", data: livro});
       } catch (err) {
        console.error(err);
        return res.status(500).json({error: "Erro ao atualizar o livro."});
       }
     },

    deletar: async (req, res) => {
        try {
            const livro = await books_model.findByPk(req.params.id);
            if (!livro) {
                return res.status(404).json({ mensagem: "Livro não encontrado." });
            }
            await livro.destroy();
            return res.status(200).json({ mensagem: "Livro deletado com sucesso!" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Erro ao deletar o livro." });
        }
    }

};

module.exports = books_controller ;
