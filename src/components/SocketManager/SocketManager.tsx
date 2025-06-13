import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import './SocketManager.css'


const SocketManager = () => {
    const socketList = useAppSelector((state) => state.socketSlice.socketList)
    const dispatch = useAppDispatch()


    const handleClose = (key: string) => {
        dispatch({ type: 'socket/disconnect', payload: { key } })
    }


    return (
        <>

            <div className="socket-container">

                {Object.keys(socketList).length > 0 ? (
                    Object.entries(socketList).map(([key, value]: [string, any], index) => (
                        <div className='socket-row' key={key}>
                            <div className='snumber'>#{index + 1}</div>
                            <div className='key'>{key}</div>
                            <div className='url'>{value?.socket.url}</div>
                            <div>
                                <button className='close-btn' onClick={() => handleClose(key)}>Close</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='socket-row'>No active sockets</div>
                )}


            </div>
        </>
    )
}

export default SocketManager