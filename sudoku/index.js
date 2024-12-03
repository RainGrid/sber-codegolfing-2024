e = process.argv.slice(2).map((r) => [...r]);
a = [...e.keys()];

s = (m) => {
  for (let r of a)
    for (let c of a)
      if (!+e[r][c]) {
        for (n of a) {
          n++;
          if (
            a.every(
              (i) =>
                e[r][i] ^ n &&
                e[i][c] ^ n &&
                e[3 * ((r / 3) | 0) + ((i / 3) | 0)][
                  3 * ((c / 3) | 0) + (i % 3)
                ] ^ n,
            )
          ) {
            e[r][c] = n;
            if (!s()) return;
            e[r][c] = 0;
          }
        }
        return 1;
      }
};

s();
e.map((r) => console.log(r.join('')));
