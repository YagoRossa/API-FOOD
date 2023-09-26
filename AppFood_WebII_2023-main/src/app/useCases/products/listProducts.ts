import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response) {
    try {
        // Consulta todos os produtos no banco de dados
        const products = await Product.find();

        // Envia a lista de produtos como resposta JSON
        res.json(products);
    } catch (error) {
        // Em caso de erro, registra o erro no console usando 'console.log()' e envia uma resposta de status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}