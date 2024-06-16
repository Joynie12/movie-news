const Koa = require('koa');
const serve = require('koa-static');
const slow = require('koa-slow');

const app = new Koa();

app.use(slow({ delay: 2000 }));
app.use(serve(__dirname + '/../dist'));

app.use(async ctx => {
  if (ctx.path === '/api/news') {
    ctx.body = [
      { title: 'Новость 1' },
      { title: 'Новость 2' },
      { title: 'Новость 3' },
    ];
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
