const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoryRepository.findAll(orderBy);
    return response.status(200).json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const categories = await CategoryRepository.findById(id);
    if (!categories) {
      return response.status(404).json({ message: 'Category not found.' });
    }
    return response.status(200).json({ categories });
  }

  async store(request, response) {
    const { name } = request.body;
    if (!name) {
      return response.status(400).json({ message: 'Name is required' });
    }
    const categories = await CategoryRepository.create(name);
    return response.status(200).json({ categories });
  }

  async delete(request, response) {
    const { id } = request.params;
    const deleteCategory = await CategoryRepository.delete(id);
    return response.status(200).json({ deleteCategory });
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;
    const existingCategory = await CategoryRepository.findById(id);
    if (!existingCategory) {
      return response.status(404).json({ message: 'Category not found.' });
    }
    const deleteCategory = await CategoryRepository.update(name, id);
    return response.status(200).json({ deleteCategory });
  }
}

module.exports = new CategoryController();
