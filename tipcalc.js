const args = process.argv.slice(2);

function printUsage() {
  console.log(`Tip Splitter

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
  TIP_PERCENT=25 node tipcalc.js 84.50`);
}

function fail(message){
    console.error(`Error Message: ${message}`);
    console.error('Run "node tipcalc.js --help" for usage');
    process.exit(1);
}

function parseNumber(text, name){
    const value = Number(text);
    if(String(text).trim() === '' || !Number.isFinite(value)){
        fail(`${name} must be a number, but got "${text}.`);
    }
    return value;
}

if(args.length === 0 || args.includes('--help') || args.includes('-help')){
    printUsage();
    process.exit(0);
}

const bill = parseNumber(args[0], 'Bill');
if(bill <=0){
    fail('Bill must be greater than 0');
}

const tipInput = args[1] || process.env.TIP_PERCENT || '18';
const tipPercent = parseNumber(tipInput, 'Tip Percent');
if(tipPercent < 0){
    fail('Tip percent cannot be negative');
}
if(tipPercent > 100){
    fail('Tip percent cannot be greater than 100');
}

const peopleInput = args[2] || '1';
const people = parseNumber(peopleInput, 'Total Number of People');
if(!Number.isInteger(people)){
    fail('Total no of people must be a whole number');
}
if(people< 1){
    fail('Total no of people must be atleast greater than 1');
}


const tipAmount = bill * (tipPercent / 100);
const billTotal = bill + tipAmount;
const perPerson = billTotal / people;

const money = (n) => `$${n.toFixed(2)}`;

console.log(`Bill:   ${money(bill)}`);
console.log(`Tip(${tipPercent}%):` .padEnd(17) + money(tipAmount));
console.log(`Total:   ${money(billTotal)}`);
console.log(`People:   ${people}`);
console.log(`Each person share:   ${money(perPerson)}`);

