const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve('dist')));


require('./server/config/database');

app.use('/api', require('./server/config/routes'));




app.use(require('./server/config/routes/catchall-routes'));


app.listen(port, () => console.log(`express listening on port ${ port }`));
