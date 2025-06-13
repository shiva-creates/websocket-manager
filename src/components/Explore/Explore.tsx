import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import './Explore.css'

const Explore = () => {
    const price = useAppSelector((state) => state.price.ethMarketPrice)
    const dispatch = useAppDispatch()



    const handleOpenConnection = () => {
        console.log('message')
        dispatch(dispatch({
            type: 'socket/connect',
            payload: {
                url: 'wss://fstream.binance.com/stream?streams=ethusdt@markPrice',
                setPrice: 'EthMarketPrice'
            },
        }));
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
        dispatch({ type: 'socket/disconnect' });
    }

    return (
        <>
            <div className='profile-container'>
                <h1>ETH/USDT Market Price</h1>
                <h2>{price || 'Loading'}</h2>
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