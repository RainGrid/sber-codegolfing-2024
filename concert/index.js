s = 60;
c = process.argv;
M = c.pop() * s;
T = c.slice(3);

d = Array(M + 1).fill(0);
l = [];

T.map((b) => {
  [o, y, v] = b.split(/ |:/);
  k = y * s + +v;
  for (let j = M; j >= k; j--) {
    if (d[j - k] + k > d[j]) {
      d[j] = d[j - k] + k;
      l[j] = [...(l[j - k] ?? []), o];
    }
  }
});

r = Math.max(...d);

p = (s) => ('' + s).padStart(2, '0');
console.log([...l[d.indexOf(r)], p((r / s) | 0) + ':' + p(r % s)].join`\n`);
