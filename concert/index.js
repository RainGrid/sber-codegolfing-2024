s = 60;
M = (c = process.argv).pop() * s;

p = (x) => (x > 9 ? x : '0' + x);

for (b of c) {
  [o, y, v] = b.split(/ |:/);
  k = +v + y * s;
  for (j = M; j >= k; j--) {
    f = +[p[j - k]] + k;
    if (f > [p[j]]) {
      p[j] = f;
      p[-j] = [p[k - j]] + o + '\n';
    }
  }
}

console.log(p[-M] + p((p[M] / s) | 0) + ':' + p(p[M] % s));
