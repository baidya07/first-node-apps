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


The curl output showing "Squats" in the array.
bibekbaidya@Mac-11364 first-node-apps % curl -i http://localhost:3000/api/gym-routine             
HTTP/1.1 200 OK
Content-type: application/json
Date: Tue, 20 Oct 2026 20:35:39 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"owner":"Bibek Baidya","perWeek":4,"split":"Push / Pull / Legs / Core","exercises":["Push-ups","Pull-ups","Leg press","Squats","Abs"]}%


bibekbaidya@Mac-11364 first-node-apps % node server.js 5000
Server running at http://localhost:5000/echo 
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
