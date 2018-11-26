//++ declare apiRoutes function
export default (router) => {

  router.get('/', (request, response) => {
    response.status(200).json({
      messsage: "Welcome to gitcheat api endpoints"
    });
  });

  router.all('*', (request, response) => {
    response.status(404).json({
      message: "No resource found for the path specified"
    });
  });

  return router;
}
