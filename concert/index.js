s = 60;
c = process.argv;
M = c.at(-1) * s;
d = {};
l = {};

for (b of c) {
  [o, y, v] = b.split(/ |:/);
  k = y * s + +v;
  for (j = M; j >= k; j--) {
    f = d[j - k] + k || k;
    if (f > (d[j] || 0)) {
      d[j] = f;
      l[j] = [l[j - k]] + o + '\n';
    }
  }
}

p = (x) => (x > 9 ? x : '0' + x);

console.log(l[M] + p((d[M] / s) | 0) + ':' + p(d[M] % s));
