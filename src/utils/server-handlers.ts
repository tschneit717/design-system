import { rest } from 'msw';

const handlers = [
  rest.get('/test/get', async (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  }),

  rest.post('/test/post', async (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  }),
];

export { handlers };
