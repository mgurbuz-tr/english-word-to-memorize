import * as signalR from '@microsoft/signalr'
import { HubConnection } from '@microsoft/signalr';


export async function createSignalRConnection() {
    let connection = new signalR.HubConnectionBuilder()
        .withUrl("http://localhost:5174/wordshub")
        .build();
        
   await connection.start();

    return connection;
}

export function disconnectSignalR(connection: HubConnection) {
    connection.stop();
}