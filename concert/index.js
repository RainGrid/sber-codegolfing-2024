let sinm = 60;
let args = process.argv.slice(2);
let N = +args[0];
let songs = [];

for (let i = 1; i <= N; i++) {
  let [name, songDuration] = args[i].split(' ');
  let [minutes, seconds] = songDuration.split(':').map((n) => +n);
  let durationInSeconds = minutes * sinm + seconds;
  songs.push([name, durationInSeconds]);
}

let maxTimeInSeconds = args[N + 1] * sinm;

let dp = Array(maxTimeInSeconds + 1).fill(0);

let selected = Array(maxTimeInSeconds + 1).fill([]);

let maxDuration = 0;

for (let song of songs) {
  let dur = song[1];
  for (let j = maxTimeInSeconds; j >= dur; j--) {
    if (dp[j - dur] + dur > dp[j]) {
      dp[j] = dp[j - dur] + dur;
      maxDuration = dp[j] > maxDuration ? dp[j] : maxDuration;

      selected[j] = [...selected[j - dur], song[0]];
    }
  }
}

let pad = (s) => `${s}`.padStart(2, '0');
[
  ...selected[dp.indexOf(maxDuration)],
  pad((maxDuration / sinm) | 0) + ':' + pad(maxDuration % sinm),
].map((n) => console.log(n));
