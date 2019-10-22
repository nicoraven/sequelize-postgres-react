// SETUP
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.json());

// IMPORT ROUTES
const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);
app.get('/', (req, res) => res.status(200).send({ message: 'Welcome.' }));

// LISTEN TO SERVER
app.listen(PORT, () => console.log(`~~~ Listening on port ${PORT}! ~~~`));
