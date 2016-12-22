var sum = 0;

for (var input = 2; input < process.argv.length; input++){
    sum += Number(process.argv[input]);
}

console.log(sum);