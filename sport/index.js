r = (n, c = ' ') => c.repeat(n);

w = +process.argv[2] - 10;

d = [[0, []]];

for (e of [
  ['G', 50],
  ['F', 40],
  ['E', 30],
  ['D', 20],
  ['C', 10],
  ['B', 5],
  ['A', 3],
]) {
  x = e[1];
  for (j = x; j <= w; j++) {
    if (!!d[j - x]) {
      c = d[j - x][0] + 1;

      v = [...d[j - x][1], e[0]];

      if (
        !d[j] ||
        c < d[j][0] ||
        (c == d[j][0] && v.length > d[j][1].length) ||
        (c == d[j][0] && v.join('') > d[j][1].join(''))
      ) {
        d[j] = [c, v];
      }
    }
  }
}

u = d[w]?.[1].sort() || [];
n = u.length;

o = [];

l = (q) => u.slice(-q).join('');
h = (q) => u.slice(-q).reverse().join('');
g = (cal, spal) => {
  for (i = 1; i < n; i++) {
    o.push([r(spal(i) + 1), l(cal(i)), r(10), h(cal(i))].join(''));
  }
};

g(
  (i) => i,
  (i) => n - i,
);

k = '=' + l(u.length) + r(10, '=') + h(u.length) + '=';

o.push(k);

g(
  (i) => n - i,
  (i) => i,
);

console.log(w < 0 || !d[w] ? 'IMPOSSIBLE' : o.join('\n'));
