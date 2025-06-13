import type { Middleware } from '@reduxjs/toolkit';
import { Socket } from '../../utils/socket';
import { setMarketPrice } from '../slices/marketPriceSlice';
import { addSocket, deleteSocket } from '../slices/socketListSlice';

// const URL = 'wss://fstream.binance.com/ws/btcusdt@markPrice';

// const socketList: any = {};


export const multiSocketMiddleware = (socket: Socket): Middleware => ({ dispatch, getState }) => (next) => (action: any) => {
    const socketList = getState().socketSlice.socketList;
    console.log(getState())

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

                // socketList[action.payload.key] = socket;
                console.log('adding to the list', socketList);
                dispatch(addSocket({ key: action.payload.key, socket: socket }));
            }
            break;

        case 'socket/disconnect':
            if (!action.payload?.key) break;

            const socket = socketList[action.payload.key];
            if (socket) {
                socket.disconnect();
                // delete socketList[action.payload.key];
                console.log('delted list', socketList);

                dispatch(deleteSocket({ key: action.payload?.key }));
            }
            break;

        case 'socket/send':
            if (!action.payload?.key || !action.payload?.message) break;

            socketList[action.payload.key]?.send(action.payload.message);
            break;
    }

    return next(action);

}
