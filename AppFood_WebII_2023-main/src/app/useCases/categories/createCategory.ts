import { Request, Response } from 'express';
import { Category } from '../../models/Category';

// Função assíncrona para criar uma categoria
export async function createCategory(req: Request, res: Response) {
  try {
    // Extrai os campos 'icon' e 'name' do corpo da requisição
    const { icon, name } = req.body;

    // Cria uma nova categoria usando o modelo 'Category' com os campos fornecidos
    const category = await Category.create({ icon, name });

    // Define o status da resposta como 201 (Created) e envia a categoria criada como JSON
    res.status(201).json(category);
  } catch (error) {
    // Em caso de erro, registra o erro no console e envia uma resposta com status 500 (Internal Server Error)
    console.log(error);
    res.sendStatus(500);
  }
}