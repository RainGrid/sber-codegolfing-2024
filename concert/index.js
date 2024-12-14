s = 60;
c = process.argv;
M = c.at(-1) * s;
d = console.log;

p = (x) => (x > 9 ? x : '0' + x);

c.map((b) => {
  [o, y, v] = b.split(/ |:/);
  k = +v + y * s;
  for (j = M; j >= k; j--) {
    f = +[d[j - k]] + k;
    if (f > [d[j]]) {
      d[j] = f;
      p[j] = [p[j - k]] + o + '\n';
    }
  }
});

d(p[M] + p((d[M] / s) | 0) + ':' + p(d[M] % s));
