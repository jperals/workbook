var sum = 0;
for(var i = 2, n = process.argv.length; i < n; i++) {
    var number = Number(process.argv[i]);
    sum += number;
}
console.log(sum);
