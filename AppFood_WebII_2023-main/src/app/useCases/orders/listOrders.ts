import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
    try {
        // Consulta todos os pedidos no banco de dados
        const orders = await Order.find()
            // Ordena os pedidos por data de criação em ordem ascendente (do mais antigo para o mais recente)
            .sort({ createdAt: 1 })
            // Popula os produtos associados a cada pedido, referenciando o campo 'product' no modelo de pedido
            .populate('products.product');

        // Envia a lista de pedidos populada como resposta JSON
        res.json(orders);
    } catch (error) {
        // Em caso de erro, registra o erro no console usando 'console.log()' e envia uma resposta de status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}