import http from 'node:http';

const port = process.argv[2] || process.env.PORT || 3000;

//helper functions
function escapeHtml(text){
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/</g, '&gt;')
        .replace(/</g, '&quot;')
        .replace(/</g, '&#39');
}

function capitalizeWords(text){
    return text
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

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
                    <li><a href = "/api/gym-routine">/api/gym-routine</a></li>
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

    //  /hello/<name>
    if(path.startsWith('/hello/')){
        let name;
        try{
            name = decodeURIComponent(path.slice('/hello/'.length));
        } catch (err){
            res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8'});
            res.end('Bad Request: malformed URL');
            return;
        }

        const safeName = escapeHtml(capitalizeWords(name));
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
        res.end(`<h1>Hello ${safeName}!</h1>`);
        return;
    }

    // /api/time
    if(path === '/api/time'){
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify({
            time: new Date().toISOString(),
            uptimeSeconds: Math.round(process.uptime()),
        }));
        return;
    }

    // Custom route: /api/gym-routine
    if(path === '/api/gym-routine'){
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify({
            owner: 'Bibek Baidya',
            perWeek: 4,
            split: 'Push / Pull / Legs / Core',
            exercises: ['Push-ups', 'Pull-ups', 'Leg press', 'Squats', 'Abs'],
        }));
        return;
    }


    if(path === '/favicon.ico'){
        res.writeHead(404);
        res.end();
        return;
    }

    res.writeHead(404, {'Content-type': 'text/html; charset=utf-8 '});
    res.end('<h1>404 - Not found</h1><p>Sorry, that page does not exist. <a href="/">Go home</a></p>'); 
});

server.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}/`);
});