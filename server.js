import http from 'node:http';

const port = process.argv[2] || process.env.port || 3000;

const server = http.createServer((req, res) => {
    const start = Date.now();

    res.on('finish', () => {
        console.log(`${req.method} ${req.url} ${res.statusCode} ${Date.now() - start}ms `)
    });


    if(req.method !== 'GET'){
        res.writeHead(405, {
            'content-type': 'text/plain; charset=utf-8',
            allow: 'GET',
        });
        res.end('Method not Allowed');
        return;
    }

    const path = req.url.split('?')[0];

    if(path === '/'){
        res.writeHead(200, {'content-Type': 'text/plain; charset=utf-8'} );
        res.end(`<!DOCTYPE html>
            <html>
            <head><title>First Node Apps</title></head>
            <body>
                <h1>Welcome</h1>
                <ul>
                    <li><a href = "/hello/ada%20lovelace">/hello/ada lovelace</a></li>
                    <li><a href = "/api/time">/api/time </a></li>
                    <li><a href = "/health">/health</a></li>
                </ul>
            </body>
        </html>    
            `);
        return;
    }

    if(path === '/health'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('OK');
        return;
    }

    if(path === '/favicon.ico'){
        res.writeHead(404);
        res.end();
        return;
    }

    res.writeHead(404, {'content-type': 'text/html; charset=utf-8 '});
    res.end('<h1>404 - Not found</h1><p>Sorry, that page does not exist. <a href="/">Go home</a></p>'); 
});

server.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}/`);
});