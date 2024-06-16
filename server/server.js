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

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
