import models from '../models/config/associations.js'


class ProductServices {
    async getProducts() {
        return await models.Products.findAll()
    }

    async getProductById(id) {
        return await models.Products.findByPk(id)
    }

    async createProduct(product) {
        return await models.Products.create(product)
    }

    async updateProduct(id, product) {
        return await models.Products.update(product, {
            where: {
                id: id
            }
        })
    }

    async deleteProduct(id) {
        return await models.Products.destroy({
            where: {
                id: id
            }
        })
    }
}

export const productServices = new ProductServices();