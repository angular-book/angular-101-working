import { rest, setupWorker } from 'msw';
import { showMocks } from './shows';
import { stremingPlatformMocks } from './streaming-platforms';



export const mocks = [
    ...showMocks,
    ...stremingPlatformMocks
]

const worker = setupWorker(...mocks);

worker.start();

export { worker, rest };
