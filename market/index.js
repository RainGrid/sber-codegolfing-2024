e = (str) => new Date(str);

('' + process.argv.slice(4))
  .split(/ |,/)
  .map((d) => d.split('.').reverse().join('-'))
  .sort()
  .map(
    (a, i) => (
      ([y, m, d] = e(e(a) - 259200000)
        .toJSON()
        .split(/-|T/)),
      i < 3 && console.log(d + '.' + m + '.' + y)
    ),
  );
