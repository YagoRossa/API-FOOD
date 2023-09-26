import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
    try {
        // Extrai o nome do arquivo de imagem do corpo da requisição, se estiver presente
        const imagePath = req.file?.filename;

        // Extrai os campos 'name', 'description', 'price', 'category' e 'ingredients' do corpo da requisição
        const { name, description, price, category, ingredients } = req.body;

        // Cria um novo produto no banco de dados com base nos campos extraídos
        const product = await Product.create({
            name,
            description,
            imagePath,
            price: Number(price), // Converte o preço para um número
            category,
            ingredients: ingredients ? JSON.parse(ingredients) : [], // Converte a lista de ingredientes de uma string JSON para um array, se existir
        });

        // Define o status da resposta como 201 (Created) para indicar que a operação foi bem-sucedida e retorna o novo produto criado em formato JSON
        res.status(201).json(product);
    } catch (error) {
        // Em caso de erro, registra o erro no console usando 'console.log()' e envia uma resposta de status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}