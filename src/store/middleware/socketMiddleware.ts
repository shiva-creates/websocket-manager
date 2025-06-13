import type { Middleware } from '@reduxjs/toolkit';
import { Socket } from '../../utils/socket';
import { setMarketPrice, setEthMarketPrice } from '../slices/marketPriceSlice';

// const URL = 'wss://fstream.binance.com/ws/btcusdt@markPrice';

export const socketMiddleware = (socket: Socket): Middleware => ({ dispatch }) => (next) => (action: any) => {
    switch (action.type) {
        case 'socket/connect':
            socket.connect(action.payload.url);

            socket.on('message', (event) => {
                const data = JSON.parse(event.data);
                if (data.data.p && action.payload?.setPrice == 'MarketPrice') {
                    dispatch(setMarketPrice(data.data.p));
                }
                if (data.data.p && action.payload?.setPrice == 'EthMarketPrice') {
                    dispatch(setEthMarketPrice(data.data.p));
                }
            });

            break;

        case 'socket/send':
            if (socket) {
                socket.send(action.payload?.message);
            }
            break;

        case 'socket/disconnect':
            socket.disconnect();
            break;
    }

    return next(action);
};
