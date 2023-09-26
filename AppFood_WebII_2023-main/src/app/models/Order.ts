// Importação das dependências do Mongoose
import { model, Schema } from 'mongoose';

// Criação do modelo de Pedido (Order)
export const Order = model('Order', new Schema({
  // Campo 'table': Número da mesa onde o pedido foi feito
  table: {
    type: String,       // Tipo de dado: String
    required: true,     // Campo obrigatório
  },

  // Campo 'status': Status atual do pedido, com opções definidas
  status: {
    type: String,       // Tipo de dado: String
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'], // Valores permitidos
    default: 'WAITING', // Valor padrão se não especificado
  },

  // Campo 'createdAt': Data e hora em que o pedido foi criado
  creatdAt: {
    type: Date,         // Tipo de dado: Date (Data)
    default: Date.now, // Valor padrão é a data e hora atual
  },

  // Campo 'products': Lista de produtos no pedido
  products: {
    required: true,     // Campo obrigatório
    type: [{
      // Subdocumento para cada produto no pedido
      product: {
        type: Schema.Types.ObjectId, // Tipo de dado: ObjectId referenciando o modelo 'Product'
        required: true,             // Campo obrigatório
        ref: 'Product',             // Referência ao modelo 'Product'
      },
      // Quantidade do produto no pedido (opcional, padrão é 1)
      quantity: {
        type: Number,               // Tipo de dado: Number (Número)
        default: 1,                 // Valor padrão é 1 se não especificado
      },
    }],
  },
}));