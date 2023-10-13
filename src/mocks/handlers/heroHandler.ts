import { rest } from 'msw';

const baseUrl = '**/api';

export const HEROES = [
  {
    firstName: 'Barry',
    house: 'DC',
    id: '46238gdsfius',
    knownAs: 'Flash',
    lastName: 'Allen',
  },
  {
    firstName: 'Scott',
    house: 'Marvel',
    id: '483tgsiugf',
    knownAs: 'Cyclopes',
    lastName: 'Summer',
  },
];

export const heroHandler = [
  rest.get(`${baseUrl}/heroes`, (req, res, ctx) => {
    return res(ctx.json(HEROES));
  }),
  rest.delete(`${baseUrl}/heroes/:id`, (req, res, ctx) => {
    return HEROES.find(h => {
      return h.id === req.params.id;
    })
      ? res(ctx.status(200))
      : res(ctx.status(404));
  }),
  rest.post(`${baseUrl}/heroes`, async (req, res, ctx) => {
    return res(ctx.json(await req.json()));
  }),
];
