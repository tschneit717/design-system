import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.sampleapis.com/futurama/episodes', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          number: '81 - 84',
          title: "Bender's Game",
          writers: 'Eric Horsted, David X. Cohen',
          originalAirDate: 'April 25, 2009',
          desc: "When the price of Dark Matter suddenly rises to a ridiculous amount, the Planet Express Crew starts rationing fuel and ends up finding Mom's primary source of income. Leela disobeys Farnsworths ration rule to teach a lesson to a couple of lazy guys who insulted the crews ship and Zoidberg tells on Leela. Leela has an electric collar put on her because of anger issues and she starts blaming all of her problems on Zoidberg, bullying him constantly. Bender becomes obsessed with the Dungeons And Dragons game and is sent to an insane asylum. Nibbler is kidnapped by Mom's sons and the crew goes out to rescue him, only to be sent into a mysterious fantasy world.",
          id: 76,
        },
        {
          number: '137 - 10',
          title: 'Game of Tones',
          writers: 'Michael Rowe',
          originalAirDate: 'August 14, 2013',
          desc: "Fry get's inside a dream dated in Dec 31st 1999 looking for a misterious sound that menaces the earth.",
          id: 125,
        },
      ])
    );
  }),
];
