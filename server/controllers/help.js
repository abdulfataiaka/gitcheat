import Help from '../database/models/help';

class HelpController {
  static searchHelp(request, response) {
    const { query } = request.body;
    if (!query || !query.trim().length) {
      return response.status(400).json({
        message: 'Search query provided is invalid',
        query: query || null
      });
    }

    const regex = new RegExp(`^.*${query}.*$`, 'i');
    Help.find({ title: regex }, (error, helps) => {
      if (error) {
        return response.status(500).json({
          message: 'Database error occured',
          error
        });
      }

      response.status(200).json({
        message: 'Search operation was successful',
        helps
      });
    });
  }

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
