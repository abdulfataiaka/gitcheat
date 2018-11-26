import path from 'path';

//++ declare webRoutes function
export default (router) => {

  router.get('/', (request, response) => {
    response.status(200).sendFile(path.resolve('public/index.html'));
  });

  router.all('*', (request, response) => {
    response.status(404).send("The page was not found for the path specified");
  });

  return router;
}
