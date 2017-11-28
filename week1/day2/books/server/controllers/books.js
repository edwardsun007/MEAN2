const Book = require('mongoose').model('Book');

module.exports = {
  index(request, response) {
    Book.find({})
      .then(books => response.json(books))
      .catch(console.log);
  },
  create(request, response) {
    console.log(request.body);
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(console.log);
  },
  update(request, response) {

  },
  show(request, response) {
    console.log('inside books show');
    Book.findById(request.params.id)
      .then(book => response.json(book))
      .catch(console.log);
  },
  destroy(request, response) {

  },
};
