
import { rest } from 'msw';

const url = 'http://api.angular-book.com/platforms';

let data: string[] = [
    'Disney+', 'NetFlix', 'Hulu', 'HBO Max', 'Prime'
]

export const stremingPlatformMocks = [
    rest.get(url, async (_, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                _embedded: [
                    ...data
                ]
            })
        )
    })
]