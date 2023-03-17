import winston from 'winston';
const archivist = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: 'story.log'
        }),
        new winston.transports.Console({
            level: 'info'
        })
    ]
});
export default archivist;
