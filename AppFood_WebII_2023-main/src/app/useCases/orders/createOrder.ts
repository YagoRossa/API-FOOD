import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
    try {
        // Extrai os campos 'table' e 'products' do corpo da requisição
        const { table, products } = req.body;

        // Cria um novo pedido no banco de dados com base nos campos extraídos
        const order = await Order.create({ table, products });

        // Define o status da resposta como 201 (Created) para indicar que a operação foi bem-sucedida e retorna o novo pedido criado em formato JSON
        res.status(201).json(order);
    } catch (error) {
        // Em caso de erro, registra o erro no console usando 'console.log()' e envia uma resposta de status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}