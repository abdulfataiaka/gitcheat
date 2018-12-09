import CategoryController from '../controllers/category';
import HelpController from '../controllers/help';

export default (router) => {
  router.get('/', (request, response) => {
    response.status(200).json({
      messsage: 'Welcome to gitcheat api endpoints'
    });
  });

  router.get('/categories', CategoryController.getAll);
  router.get('/helps/:categoryId', HelpController.getCategoryHelps);

  router.all('*', (request, response) => {
    response.status(404).json({
      message: 'No resource found for the path specified'
    });
  });

  return router;
};
