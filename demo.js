import cron from 'node-cron';
import moment from 'moment';
const data = new Date();
console.log(data);
const data2 = new Date('2024-09-02T00:00:00.000Z');
const data3 = data2 - data;
console.log(data3);
const days = Math.floor(data3 / (1000 * 60 * 60 * 24));
console.log(days);
console.log(24 * 60 * 60 * 1000);
const dia = new moment().format('LLLL');
console.log(dia)