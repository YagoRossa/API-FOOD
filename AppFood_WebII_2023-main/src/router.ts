import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

// Configuração do multer para lidar com uploads de arquivos
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});

// Rota para listar categorias
router.get('/categories', listCategories);

// Rota para criar uma categoria
router.post('/categories', createCategory);

// Rota para listar produtos
router.get('/products', listProducts);

// Rota para criar um produto (com upload de imagem)
router.post('/products', upload.single('image'), createProduct);

// Rota para listar produtos por categoria
router.get('/categories/:categoryId/products', listProductsByCategory);

// Rota para listar pedidos
router.get('/orders', listOrders);

// Rota para criar um pedido
router.post('/orders', createOrder);

// Rota para alterar o status de um pedido (uso de PATCH em vez de PUT por ser uma alteração parcial)
router.patch('/orders/:orderId', changeOrderStatus);

// Rota para excluir/cancelar um pedido
router.delete('/orders/:orderId', cancelOrder);
