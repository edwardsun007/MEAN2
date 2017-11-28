const bookController = require('../../controllers/books');
const router = require('express').Router();

module.exports = router
  .get('/', bookController.index)
  .post('/', function(request, response) {
    console.log('creating book');
    bookController.create(request, response);
  })
  .put('/:id', bookController.update)
  .get('/:id', bookController.show)
  .delete('/:id', bookController.destroy);
