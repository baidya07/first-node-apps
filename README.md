# First Node Apps

# How to Run the app

- Task 1: `node tipcalc.js <bill> [tip%] [people]`
- Task 2: `npm start` or `npm run dev`

## Task 1 Test Log

| # | Type | Command | Exit code |
|---|------|---------|-----------|
| 1 | Valid | `node tipcalc.js 84.50 20 3` | 0 |
| 2 | Valid | `node tipcalc.js 50` | 0 |
| 3 | Valid | `node tipcalc.js 100 15 4` | 0 |
| 4 | Env var | `TIP_PERCENT=25 node tipcalc.js 112.30` | 0 |
| 5 | Invalid (text) | `node tipcalc.js jkl` | 1 |
| 6 | Invalid (negative) | `node tipcalc.js -24` | 1 |
| 7 | Invalid (tip over 100) | `node tipcalc.js 30 120` | 1 |
| 8 | Help | `node tipcalc.js --help` | 0 |

Output: 1
Bill:   $84.50
Tip(20%):        $16.90
Total:   $101.40
People:   3
Each person share:   $33.80

Output: 2
Bill:   $50.00
Tip(18%):        $9.00
Total:   $59.00
People:   1
Each person share:   $59.00

Output: 3
Bill:   $100.00
Tip(15%):        $15.00
Total:   $115.00
People:   4
Each person share:   $28.75

Output: 4
Bill:   $112.30
Tip(25%):        $28.07
Total:   $140.38
People:   1
Each person share:   $140.38

Output: 5
Error Message: Bill must be a number, but got "jkl.
Run "node tipcalc.js --help" for usage

Output: 6
Error Message: Bill must be greater than 0
Run "node tipcalc.js --help" for usage

Output: 7
Error Message: Tip percent cannot be greater than 100
Run "node tipcalc.js --help" for usage

Output: 8
Tip Splitter

Usage:
  node tipcalc.js <bill> [tip%] [people]

Arguments:
  bill     Total bill amount in dollars (required, greater than 0)
  tip%     Tip percentage from 0 to 100 (optional)
           Falls back to the TIP_PERCENT environment variable, then 18
  people   Number of people splitting the bill (optional, whole number, default 1)

Options:
  -h, --help   Show this help message

Examples:
  node tipcalc.js 84.50 20 3
  node tipcalc.js 60
  TIP_PERCENT=25 node tipcalc.js 84.50


  The nodemon lines:
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running at http://localhost:3000/






## Task 2 Test Log

### curl -i output
```
$ curl -i http://localhost:3000/
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Date: Wed, 21 Oct 2026 03:38:04 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

<!DOCTYPE html>
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


$ curl -i http://localhost:3000/hello/ada%20lovelace
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Date: Wed, 21 Oct 2026 03:54:17 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

<h1>Hello Ada Lovelace!</h1>
$ curl -i http://localhost:3000/api/time
HTTP/1.1 200 OK
Content-Type: application/json
Date: Wed, 21 Oct 2026 03:54:51 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"time":"2026-10-21T03:54:51.976Z","uptimeSeconds":74}
$ curl -i http://localhost:3000/health
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
Date: Wed, 21 Oct 2026 03:55:21 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

OK
$ curl -i http://localhost:3000/api/gym-routine
HTTP/1.1 200 OK
Content-Type: application/json
Date: Wed, 21 Oct 2026 03:55:48 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"owner":"Bibek Baidya","perWeek":4,"split":"Push / Pull / Legs / Core","exercises":["Push-ups","Pull-ups","Leg press","Squats","Abs"]}
$ curl -i http://localhost:3000/favicon.ico
HTTP/1.1 404 Not Found
Date: Wed, 21 Oct 2026 03:56:15 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked


$ curl -i http://localhost:3000/does-not-exist
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Date: Wed, 21 Oct 2026 04:09:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

<h1>404 - Not found</h1><p>Sorry, that page does not exist. <a href="/">Go home</a></p>
$ curl -i -X POST http://localhost:3000/
HTTP/1.1 405 Method Not Allowed
Content-Type: text/plain; charset=utf-8
allow: GET
Date: Wed, 21 Oct 2026 04:10:22 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

Method not Allowed
$ curl -i http://localhost:3000/hello/%E0%A4%A
HTTP/1.1 400 Bad Request
Content-Type: text/plain; charset=utf-8
Date: Wed, 21 Oct 2026 04:10:45 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

Bad Request: malformed URL
$ curl -i "http://localhost:3000/hello/%3Cb%3Ebold%3C%2Fb%3E"
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Date: Wed, 21 Oct 2026 04:11:06 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

<h1>Hello &lt;b&gt;bold&lt;/b&gt;!</h1>
```

### Server request Log
<!-- bibekbaidya@Mac-11482 first-node-apps % npm run dev

> first-node-apps@1.0.0 dev
> nodemon server.js

[nodemon] 3.1.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server running at http://localhost:3000/
GET / 200 2ms 
GET / 200 0ms 
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running at http://localhost:3000/
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running at http://localhost:3000/
GET / 200 2ms 
GET / 200 1ms 
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running at http://localhost:3000/
GET / 200 1ms 
GET /health 200 0ms 
GET /hello/%E0%A4%A 400 0ms 
GET / 200 0ms 
GET / 200 0ms 
GET /hello/ada%20lovelace 200 0ms 
GET /api/time 200 0ms 
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running at http://localhost:3000/
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running at http://localhost:3000/
GET /api/time 200 2ms 
GET /api/time 200 0ms 
GET /api/time 200 0ms 
GET /health 200 0ms 
GET /api/gym-routine 200 1ms 
GET /favicon.ico 404 0ms 
rs
[nodemon] starting `node server.js`
Server running at http://localhost:3000/
GET /hello/ada%20lovelace 200 1ms 
GET /api/time 200 0ms 
GET /health 200 0ms 
GET /api/gym-routine 200 0ms 
GET /favicon.ico 404 0ms 
GET /does-not-exist 404 0ms 
POST / 405 1ms 
GET /hello/%E0%A4%A 400 0ms 
GET /hello/%3Cb%3Ebold%3C%2Fb%3E 200 0ms 
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running at http://localhost:3000/
POST / 405 2ms 
GET /does-not-exist 404 0ms 
GET /hello/%3Cb%3Ebold%3C%2Fb%3E 200 0ms 
rs
[nodemon] starting `node server.js`
Server running at http://localhost:3000/
GET /does-not-exist 404 1ms 
POST / 405 0ms 
GET /hello/%E0%A4%A 400 0ms 
GET /hello/%3Cb%3Ebold%3C%2Fb%3E 200 0ms 
 -->


### Port settings

Port from the first argument:

```
$ node server.js 5001
Server running at http://localhost:5001/
```

Port from the environment variable:

```
$ PORT=8080 node server.js
Server running at http://localhost:8080/
```

Note: macOS uses port 5000 for AirPlay Receiver, so I tested the argument with 5001.

### Watch mode proof

I added "Squats" to the `exercises` array in `/api/gym-routine` and saved. Nodemon restarted the server automatically:

```
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running at http://localhost:3000/
```

Then curl showed the new data:

```
$ curl -i http://localhost:3000/api/gym-routine
HTTP/1.1 200 OK
Content-Type: application/json
...
{"owner":"Bibek Baidya","perWeek":4,"split":"Push / Pull / Legs / Core","exercises":["Push-ups","Pull-ups","Leg press","Squats","Abs"]}
```

## Custom route

`GET /api/gym-routine` returns my gym routine as JSON (owner, perWeek, split, and an exercises array).


## Reflection

### 1. Why should an unknown URL return 404 instead of a 200 "not found" page?

Status Code is a way for software to understand the results of a request. The status code is read by “browsers,” search engine crawlers, monitoring tools, load balancers, and API clients. If a page is not found and returns 200, Google can index junk pages, which will cause monitoring to assume that the site is healthy, and an Api client will attempt to process an error page as if it were real data. A correct 404 will inform each of them the truth.

### 2. The /hello/%E0%A4%A crash

The server encountered an internal error and was unable to handle the request due to a parsing error or URI malformed: `URIError: URI malformed`. The error was located in the route /hello/ in server.js line 69 as it was using a incomplete percent encoded sequence %E0%A4%A. The error was not caught and Node killed the whole process, and curl returned: Empty reply from server. I wrapped decodeURIComponent in a try/catch block which returns 400 Bad Request and returns, so that the server continues to run.

### 3. What goes wrong with `let visits = 0` behind a load balancer?

All copies of the server would store their own individual counter in their own memory. Requests would be passed to the different copies, each would count some of the visits and never the numbers would add up. It would also be set to 0 after every copy restarted. That is not the case, the count should be stored outside the servers, in a shared data store like a database or Redis, which makes the servers stateless.