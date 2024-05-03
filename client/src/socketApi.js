// socketApi.js

import io from "socket.io-client";

let socket;

export const initSocket = () => {
    console.log("Sunucuya bağlanılıyor...");
    socket = io('http://localhost:3002', {
        transports: ['websocket']
    });

    socket.on('connect', () => console.log("Sunucuya bağlantı başarılı"));
};

export const sendColor = (color) => {
    if (socket) {
        socket.emit('newColor', color);
    } else {
        console.error("Socket bağlantısı henüz başlatılmadı!");
    }
};
export const subscribeSocket = (cb) => {
    if (socket) {
        socket.on('receive', (color) => {
            console.log(color);
            cb(color)
        });
    } else {
        console.error("Socket bağlantısı henüz başlatılmadı!");
    }
};
