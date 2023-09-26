// Importação das dependências do Mongoose
import { model, Schema } from 'mongoose';

// Criação do modelo de Produto (Product)
export const Product = model('Product', new Schema({
  // Campo 'name': Nome do produto
  name: {
    type: String,       // Tipo de dado: String
    required: true,     // Campo obrigatório
  },

  // Campo 'description': Descrição do produto
  description: {
    type: String,       // Tipo de dado: String
    required: true,     // Campo obrigatório
  },

  // Campo 'imagePath': Caminho para a imagem do produto
  imagePath: {
    type: String,       // Tipo de dado: String
    required: true,     // Campo obrigatório
  },

  // Campo 'price': Preço do produto
  price: {
    type: Number,       // Tipo de dado: Number (Número)
    required: true,     // Campo obrigatório
  },

  // Campo 'ingredients': Lista de ingredientes do produto
  ingredients: {
    required: true,     // Campo obrigatório
    type: [{
      // Subdocumento para cada ingrediente do produto
      name: {
        type: String,     // Tipo de dado: String
        required: true,   // Campo obrigatório
      },
      // Icone do ingrediente (caminho para a imagem, por exemplo)
      icon: {
        type: String,     // Tipo de dado: String
        required: true,   // Campo obrigatório
      },
    }],
  },

  // Campo 'category': Referência à categoria do produto
  category: {
    type: Schema.Types.ObjectId,  // Tipo de dado: ObjectId referenciando o modelo 'Category'
    required: true,               // Campo obrigatório
    ref: 'Category',              // Referência ao modelo 'Category'
  },
}));