('' + process.argv.slice(4))
  .split(/ |,/)
  .map((s) =>
    new Date(new Date(s.split`.`.reverse().join`-`) - 2592e5).toJSON(),
  )
  .sort()
  .map((s, i) => i < 3 && console.log(s.split(/\D/, 3).reverse().join`.`));
