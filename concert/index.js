s = 60;
c = process.argv;

d = [];
l = [];

c.map((b) => {
  [o, y, v] = b.split(/ |:/);
  k = y * s + +v;
  for (j = c.at(-1) * s; j >= k; ) {
    f = (d[--j - k] ?? 0) + k;
    if (f > (d[j] ?? 0)) {
      d[j] = f;
      l[j] = (l[j - k] ?? '') + o + '\n';
    }
  }
});

r = d.pop();

p = (x) => (x < 10 ? '0' + x : x);

console.log(l.pop() + p((r / s) | 0) + ':' + p(r % s));
