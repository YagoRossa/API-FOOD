// Importação das dependências
import { model, Schema } from 'mongoose';

// Criação do modelo de Categoria
export const Category = model('Category', new Schema({
  // Definição do campo 'name' no esquema
  name: {
    type: String,        // Tipo de dado: String
    required: true,      // Campo obrigatório
  },
  // Definição do campo 'icon' no esquema
  icon: {
    type: String,        // Tipo de dado: String
    required: true,      // Campo obrigatório
  }
}));
