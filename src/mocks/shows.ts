import { ShowItem } from "../app/models";
import * as cuid from 'cuid';
import { rest } from 'msw';

const url = 'http://api.angular-book.com/shows';

let data: ShowItem[] = [
    { id: cuid(), title: 'Andor', streamingPlatform: 'Disney+' }
]

export const showMocks = [
    rest.get(url, async (_, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                _embedded: [
                    ...data
                ]
            })
        )
    }),
    rest.post(url, async (req, res, ctx) => {
        const reqBod = await req.json();
        const newShow = { id: cuid(), ...reqBod } as ShowItem;
        data = [newShow, ...data];
        return res(
            ctx.status(201),
            ctx.json(newShow)
        )
    })
]