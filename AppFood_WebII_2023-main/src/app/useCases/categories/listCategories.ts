import { Request, Response } from 'express';
import { Category } from '../../models/Category';

// Função assíncrona para listar todas as categorias
export async function listCategories(req: Request, res: Response) {
  try {
    // Consulta todas as categorias no banco de dados usando o modelo 'Category'
    const categories = await Category.find();

    // Envia a lista de categorias como resposta no formato JSON
    res.json(categories);
  } catch (error) {
    // Em caso de erro, registra o erro no console e envia uma resposta com status 500 (Internal Server Error)
    console.log(error);
    res.sendStatus(500);
  }
}