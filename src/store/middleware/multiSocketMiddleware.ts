import type { Middleware } from '@reduxjs/toolkit';
import { Socket } from '../../utils/socket';
import { setMarketPrice } from '../slices/marketPriceSlice';

// const URL = 'wss://fstream.binance.com/ws/btcusdt@markPrice';

const socketList: any = {};


export const multiSocketMiddleware = (socket: Socket): Middleware => ({ dispatch }) => (next) => (action: any) => {
    switch (action.type) {
        case 'socket/connect':

            if (!action.payload?.key || !action.payload?.url) break;


            if (!socketList[action.payload.key]) {
                const socket = new Socket();
                socket.connect(action.payload.url);

                socket.on('message', (event) => {
                    const data = JSON.parse(event.data);
                    dispatch(setMarketPrice({ key: action.payload?.key, price: data.p }));
                });

                socketList[action.payload.key] = socket;
            }
            break;

        case 'socket/disconnect':
            if (!action.payload?.key) break;

            const socket = socketList[action.payload.key];
            if (socket) {
                socket.disconnect();
                delete socketList[action.payload.key];
            }
            break;

        case 'socket/send':
            if (!action.payload?.key || !action.payload?.message) break;

            socketList[action.payload.key]?.send(action.payload.message);
            break;
    }

    return next(action);

}
