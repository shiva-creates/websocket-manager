export class Socket {
    private socket: WebSocket | null = null;

    connect(url: string) {
        if (!this.socket) {
            this.socket = new WebSocket(url);
        }
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
    }

    send(message: any) {
        if (this.socket) {
            this.socket.send(JSON.stringify(message));
        }
    }

    on(event: keyof WebSocketEventMap, callback: (event: any) => void) {
        if (this.socket) {
            this.socket.addEventListener(event, callback);
        }
    }
}
