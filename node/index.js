import express from 'express';
import { router as initRouter } from './routes/init.sequelize.router.js';
import { productRouter } from './routes/product.router.js';
import { categoryRouter } from './routes/category.router.js';
import dotenv from 'dotenv';
import { reviewsRouter } from './routes/reviews.router.js';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

app.use(productRouter);
app.use(categoryRouter);
app.use(initRouter);
app.use(reviewsRouter);

app.listen(port, () => {
  console.log(`Server kører på http://localhost:${port}`);
});
