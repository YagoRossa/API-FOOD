import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response) {
    try {
        // Extrai o parâmetro 'orderId' da requisição
        const { orderId } = req.params;

        // Encontra e exclui o pedido com base no 'orderId' usando o método 'findByIdAndDelete'
        await Order.findByIdAndDelete(orderId);

        // Define o status da resposta como 204 (No Content) para indicar que a operação foi bem-sucedida, mas não há conteúdo a ser retornado
        res.sendStatus(204);

    } catch (error) {
        // Em caso de erro, registra o erro no console usando 'console.log()' e envia uma resposta de status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}