
import express, { Request, Response } from 'express';
import cors from 'cors';
import prisma from './lib/prisma';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/posts', async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

app.post('/post', async (req: Request, res: Response) => {
  const { content } = req.body;
  const post = await prisma.post.create({
    data: {
      content,
    },
  });
  res.json(post);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
