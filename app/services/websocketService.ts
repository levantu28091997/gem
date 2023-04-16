import io from 'socket.io-client';

class WebSocketService {
    socket : any;

    constructor() {
        this.socket = io(process.env.SOCKET || 'http://149.28.153.234:1337', {
            path: '/socket.io',
            extraHeaders: {
                'Authorization': "Bearer " + localStorage.getItem('token'),
            }
        });

        this.socket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        this.socket.on('CONNECT_INFO', (data: any) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from WebSocket server');
        });
    }

    connect(): Promise<void> {
        return new Promise((resolve) => {
            if (this.socket.connected) {
                resolve();
            } else {
                this.socket.on('connect', () => {
                    console.log('Connected to WebSocket server');
                    resolve();
                });
            }
        });
    }

    async playGame(data: any) {
        await this.connect();
        this.socket.emit('PLAY_GAME', data);
    }

    async close() {
        this.socket.disconnect();
    }
}

export default WebSocketService;
