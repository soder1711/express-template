import express from 'express';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;
const api = '/api/v1/cats'

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.use('/public', express.static('public'));

app.get('/api/v1/cats', (req, res) => {
  const cat = {
    cat_id: 1,
    name: 'Whiskers',
    birthdate: '2022-05-15',
    weight: 4.5,
    owner: 'John',
    image: 'http://localhost:3000/public/trailblazer.jpg'
  };
  res.json(cat);

});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

