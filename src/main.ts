import express from 'express';
import helloRoutes from './webApi/routers/HelloRouter';

const app = express();
const port = 3000;

app.use('/api', helloRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
