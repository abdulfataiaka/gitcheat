import Help from '../database/models/help';

class HelpController {
  static getCategoryHelps(request, response) {
    const { categoryId } = request.params;
    let id = parseInt(categoryId, 10);
    id = Number.isInteger(id) ? id : null;
    if (!id) {
      return response.status(400).json({
        message: 'Invalid category id supplied'
      });
    }

    Help.find({ categoryId }, (error, helps) => {
      if (error || !Array.isArray(helps)) {
        return response.status(500).json({
          message: 'Database error occured'
        });
      }

      response.status(200).json({
        message: 'Helps fetched successfully',
        helps
      });
    });
  }
}

export default HelpController;
