import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

// Conecta ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        // Cria uma instância do aplicativo Express
        const app = express();
        
        // Define a porta em que o servidor irá ouvir
        const port = 3000;

        // Define o middleware para servir arquivos estáticos da pasta 'uploads'
        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

        // Define o middleware para fazer o parsing de JSON nas requisições
        app.use(express.json());

        // Define as rotas do aplicativo usando o router importado
        app.use(router);

        // Inicia o servidor na porta especificada
        app.listen(port, () => {
            console.log(`🚗 Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log('Erro ao conectar no MongoDB'));