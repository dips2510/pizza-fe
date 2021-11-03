const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const {json, urlencoded} = require('body-parser');
const path = require('path');
const cors = require('cors');

const server = express();
server.use(helmet());
server.use(
  helmet.frameguard({ action: "deny" }),
  helmet.noSniff(),
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'"
      ],
      frameAncestors: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: [
        "'self'"
      ],
      fontSrc: [
        "'self'",
        "https://fonts.googleapis.com https://fonts.gstatic.com https://maxcdn.bootstrapcdn.com"
      ],
      baseUri: [
        "'self'"
      ]
    }
  }),
  helmet.referrerPolicy({ policy: "no-referrer" })
);
server.use(cors());
server.options('*', cors());
server.use(compression());
server.use(cookieParser())
server.use(json());
server.use(json({ limit: '10mb', type: 'application/json' }));
server.use(urlencoded({ extended: true }));
server.use((req, res, next) => {
  res.removeHeader("X-Powered-By");
  server.disable("x-powered-by");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  next();
});

server.use(express.static(path.join(__dirname, 'build')));

server.get('/healthcheck', (req, res) => {
    res.json("ok");
})

server.post('/api/checkoutOrder', (req, res) => {
    res.json(req.body);
});

server.get('*', (req, res) => {
    res.sendFile(`${path.join(__dirname, `build`)}/index.html`);
});



server.listen('8080', console.log('server is running on 8080'));