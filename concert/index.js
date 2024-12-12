s = 60;
c = process.argv;
M = c.pop() * s;
T = c.slice(3);

d = Array(M + 1).fill(0);
l = [];

r = 0;

T.map((b) => {
  [o, z] = b.split` `;
  [y, v] = z.split`:`;
  k = y * s + +v;
  for (let j = M; j >= k; j--) {
    if (d[j - k] + k > d[j]) {
      d[j] = d[j - k] + k;
      r = d[j] > r ? d[j] : r;
      l[j] = [...(l[j - k] ?? []), o];
    }
  }
});

p = (s) => ('' + s).padStart(2, '0');
console.log([...l[d.indexOf(r)], p((r / s) | 0) + ':' + p(r % s)].join`\n`);
