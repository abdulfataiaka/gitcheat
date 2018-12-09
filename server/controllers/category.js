import Category from '../database/models/category';

class CategoryController {
  static getAll(request, response) {
    return Category.find({}, (error, categories) => {
      if (error) {
        return response.status(500).json({
          message: 'Database error occured',
          error
        });
      }

      response.status(200).json({
        message: 'Categories fetch successfully',
        categories
      });
    });
  }
}

export default CategoryController;
