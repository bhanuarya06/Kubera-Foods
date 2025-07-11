import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/api/swiggy', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(5000, () => console.log('Proxy running on port 5000'));