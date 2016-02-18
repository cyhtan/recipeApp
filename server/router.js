module.exports = function (app, express) {

  var apiRouter = express.Router();
  app.use('/api', apiRouter);
  require('./api/apiRouter.js')(apiRouter); 

};
