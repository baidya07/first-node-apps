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