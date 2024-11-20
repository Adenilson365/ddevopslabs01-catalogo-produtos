import Product from "../models/Products";

class ProductController {
    async index(req, res) {
        try {
            const products = await Product.findAll();
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({ error: "Error fetching products" });
        }
    }

    async show(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ error: "Error fetching product" });
        }
    }

    async store(req, res) {
        const { name, price } = req.body;
        try {
            const product = await Product.create({ name, price });
            return res.status(201).json(product);
        } catch (error) {
            return res.status(500).json({ error: "Error creating product" });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, price } = req.body;
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            await product.update({ name, price });
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ error: "Error updating product" });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            await product.destroy();
            return res.status(200).json({ message: "Product deleted successfully" });
        } catch (error) {
            return res.status(500).json({ error: "Error deleting product" });
        }
    }
    teste(req, res) {
        const products = [
            { id: 1, name: "Product A", price: 19.99 },
            { id: 2, name: "Product B", price: 29.99 },
            { id: 3, name: "Product C", price: 39.99 },
            { id: 4, name: "Product D", price: 49.99 }
        ];
        return res.status(200).json(products);
    }
    
}

export default new ProductController();
