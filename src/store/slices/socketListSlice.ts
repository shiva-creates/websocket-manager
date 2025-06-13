import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Socket } from "../../utils/socket";

interface SocketListState {
    socketList: any
}

const initialState: SocketListState = {
    socketList: {},
}

const socketSlice = createSlice({
    name: 'socketList',
    initialState,
    reducers: {
        addSocket(state, action: PayloadAction<{ key: string; socket: Socket }>) {
            state.socketList[action.payload?.key] = action.payload.socket;
        },
        deleteSocket(state, action: PayloadAction<{ key: string; }>) {
            delete state.socketList[action.payload.key];
        }
    }
})

export const { addSocket, deleteSocket } = socketSlice.actions;
export default socketSlice.reducer;