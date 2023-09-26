import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
    try {
        // Extrai o parâmetro 'orderId' da requisição
        const { orderId } = req.params;

        // Extrai o campo 'status' do corpo da requisição
        const { status } = req.body;

        // Verifica se o valor de 'status' está entre as opções permitidas: WAITING, IN_PRODUCTION e DONE
        if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
            return res.status(400).json({
                error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
            });
        }

        // Atualiza o status do pedido com base no 'orderId' usando 'Order.findByIdAndUpdate'
        await Order.findByIdAndUpdate(orderId, { status });

        // Define o status da resposta como 204 (No Content) para indicar que a operação foi bem-sucedida, mas não há conteúdo a ser retornado
        res.sendStatus(204);
    } catch (error) {
        // Em caso de erro, registra o erro no console usando 'console.log()' e envia uma resposta de status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}