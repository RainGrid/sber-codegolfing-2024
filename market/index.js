e = (str) => new Date(str);

p = (s, cnt = 2) => ('' + s).padStart(cnt, '0');

process.argv
  .slice(4)
  .join(' ')
  .split(' ')
  .map((d) => d.split('.').reverse().join('-'))
  .sort()
  .map(
    (a, i, s, date = e(e(a) - 259200000)) =>
      i < 3 &&
      console.log(
        [
          p(date.getDate()),
          p(date.getMonth() + 1),
          p(date.getFullYear(), 4),
        ].join('.'),
      ),
  );
