const express = require('express');
const port = process.env.PORT || 3000;

const app = express();
app.use('/', (req, res, next) => {
    const { url } = req;
    if (url.startsWith('/server.js') || url.startsWith('/package.json') || url.startsWith('/yarn.lock')) {
        return res.status(403).end('403 Forbidden');
    }
    next();
});
app.use(express.static('.'));
app.listen(port, () => console.log(`Listening on port ${port}...`));
