import winston from 'winston';
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    defaultMeta: {
        service: 'user-service'
    },
    transports: [
        new winston.transports.File({ filename: 'errors.log', level: 'error' }),
        new winston.transports.Console({ level: 'error' })
    ]
});
export default logger;
