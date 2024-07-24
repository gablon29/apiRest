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
console.log(dia);
let d = 'Hola_43Mundo@gmail.com ';
const a = d.toLowerCase().trim();
console.log(a);
const c = 'Hola MMM';
c.toLowerCase().trim();
const i = c.toLowerCase().trim();
console.log(i);
const obj = {
    nombre: 'Hola',
    apellido: 'Mundo',
    };
const e = Object.values(obj);
console.log(e);
const f = Object.keys(obj);
console.log(f);
const g = Object.entries(obj);
console.log(g);
const h = Object.fromEntries(g);
console.log(h);
const o = JSON.stringify(obj);
console.log(o);
const p = JSON.parse(o);
console.log(p);
const q = Object.assign({}, obj);
console.log(q);

