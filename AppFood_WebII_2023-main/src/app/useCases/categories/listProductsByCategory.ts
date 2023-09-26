import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
    try {
        // Extrai o parâmetro 'categoryId' da requisição
        const { categoryId } = req.params;

        // Procura produtos no banco de dados cujo campo 'category' seja igual ao 'categoryId'
        const products = await Product.find().where('category').equals(categoryId);

        // Envia os produtos encontrados como resposta JSON
        res.json(products);
    } catch (error) {
        // Em caso de erro, registra o erro no console e envia uma resposta de erro 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}