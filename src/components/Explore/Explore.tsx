import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import './Explore.css'

const Explore = () => {
    const price = useAppSelector((state) => state.price.prices)
    const dispatch = useAppDispatch()



    const handleOpenConnection = () => {
        console.log('message')
        dispatch({ type: 'socket/connect', payload: { key: 'eth', url: 'wss://fstream.binance.com/ws/ethusdt@markPrice' } });
    }

    const handleConnectionMessage = () => {
        console.log('message')
        dispatch({
            type: 'socket/send',
            payload: { message: 'sending message to server' },
        });
    }

    const handleCloseConnection = () => {
        console.log('message')
        dispatch({ type: 'socket/disconnect', payload: { key: 'eth', url: 'wss://fstream.binance.com/ws/ethusdt@markPrice' } });
    }

    return (
        <>
            <div className='profile-container'>
                <h1>ETH/USDT Market Price</h1>
                <h2>{price.eth || '0'}</h2>
                <div>
                    <button style={{ padding: '1rem', margin: '1rem' }} onClick={handleOpenConnection}>Connect Socket</button>

                </div>

                <div>

                    <button style={{ padding: '1rem', margin: '1rem' }} onClick={handleCloseConnection}>Close Socket</button>

                </div>


            </div>
        </>
    )
}

export default Explore