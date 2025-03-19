const Koa = require('koa');
const cors = require('@koa/cors'); 
const slow = require('koa-slow');

const app = new Koa();

app.use(cors());

app.use(slow({ delay: 2000 })); // 2 секунды задержки

app.use(async (ctx) => {
  if (ctx.url === '/api/data') {
    ctx.body = [
      { text: 'Data 1' },
      { text: 'Data 2' },
      { text: 'Data 3' },
    ];
  } else {
    ctx.body = 'Hello from Koa!';
  }
});

app.listen(3000);