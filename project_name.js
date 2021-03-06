import { createServer } from 'http';
import { app } from './core/server.js';

const PORT = process.env.PORT || 3000

const srv = createServer(app).listen(PORT)
    .on('listening', () => console.log(`listening at ${PORT} port...`))
    .on('connection', () => console.log('connection'))
    .on('error', () => console.log('error'))
    .on('close', () => console.log('Application close'))

process.on('SIGTERM', () => srv.close())
process.on('SIGINT', () => srv.close())
