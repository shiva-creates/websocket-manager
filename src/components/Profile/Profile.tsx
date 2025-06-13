import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import './Profile.css'

const Profile = () => {
    const price = useAppSelector((state) => state.price.prices)
    const dispatch = useAppDispatch()



    const handleOpenConnection = () => {
        console.log('message')
        dispatch({ type: 'socket/connect', payload: { key: 'btc', url: 'wss://fstream.binance.com/ws/btcusdt@markPrice' } });
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
        dispatch({ type: 'socket/disconnect', payload: { key: 'btc' } });
    }

    return (
        <>
            <div className='profile-container'>
                <h1>BTC/USDT Market Price</h1>
                <h2>{price.btc || '0'}</h2>
                <div>
                    <button className='socket-btn' onClick={handleOpenConnection}>Connect Socket</button>

                </div>

                <div>

                    <button className='socket-btn' onClick={handleCloseConnection}>Close Socket</button>

                </div>


            </div>
        </>
    )
}

export default Profile