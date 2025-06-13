import { BrowserRouter, Route, Routes } from 'react-router';
// import { useAppDispatch, useAppSelector } from '../src/store/hooks/hooks';

import './App.css'
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Explore from './components/Explore/Explore';
import Header from './components/Header/Header';

function App() {
  // const price = useAppSelector((state) => state.price.marketPrice)
  // const dispatch = useAppDispatch()



  // const handleOpenConnection = () => {
  //   console.log('message')
  //   dispatch(dispatch({
  //     type: 'socket/connect',
  //     payload: { url: 'wss://fstream.binance.com/ws/ethusdt@markPrice' },
  //   }));
  // }

  // const handleConnectionMessage = () => {
  //   console.log('message')
  //   dispatch({
  //     type: 'socket/send',
  //     payload: { message: 'sending message to server' },
  //   });
  // }

  // const handleCloseConnection = () => {
  //   console.log('message')
  //   dispatch({ type: 'socket/disconnect' });
  // }

  // return (
  //   <>
  //     <div>
  //       <h1>BTC/USDT Market Price</h1>
  //       <div>
  //         <button style={{ padding: '1rem', margin: '1rem' }} onClick={handleOpenConnection}>Connect Socket</button>

  //       </div>

  //       <div>

  //         <button style={{ padding: '1rem', margin: '1rem' }} onClick={handleCloseConnection}>Close Socket</button>

  //       </div>

  //       <h2>{price || 'Loading'}</h2>
  //     </div>
  //   </>
  // )
  return (

    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/profile' element={< Profile />} />
          <Route path='/explore' element={< Explore />} />
        </Routes>
      </BrowserRouter>
    </>

  )


}

export default App
