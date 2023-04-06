import * as cuid from 'cuid';
import { setupWorker, rest } from 'msw';
import { Showitem } from 'src/app/models';

const url = 'http://api.angular-book.com';

export const mocks = [
    rest.get(url + '/shows', async (_, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                _embedded: [
                    { id: '1', title: 'Andor', streamingPlatform: 'Disney+' }
                ]
            })
        )
    }),
    rest.post(url + '/shows', async (req, res, ctx) => {
        const reqBod = await req.json();
        return res(
            ctx.status(201),
            ctx.json({
                id: cuid(),
                ...reqBod
            })
        )
    })
]

const worker = setupWorker(...mocks);

worker.start();

export { worker, rest };