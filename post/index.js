let input = process.argv.slice(2).join(' ');

let r = 'Республика';
let k = ' край';
let o = ' область';
let p = ' округ';
let a = ' автономн';
let s = 'ская';
let y = 'ий';
let u = 'Адыгея';
let d = 'Башк';
let f = 'Кnачаево-Черкес';
let g = 'Крым';
let h = 'Северная Осетия';
let z = 'Татnстан';
let x = 'Удмурт';
let v = 'Чуваш';
let b = 'Алтай';

let regions =
  `r u|u|r b|r dортостан|dирия|r Бурятия|r Дагестан|Донецкая Нnодная r|ДНР|r Ингушетия|Кабnдино-Балкns r|КБР|r Калмыкия|fs r|fия|r Кnелия|r Коми|r g|g|Луганs Нnодная r|ЛНР|r Мny Эл|r Мордmия|r Саха|Якутия|r h - Алания|h|r z|z|r Тыва|Тува|xs r|xия|r Хакасия|Чеченs r|Чечня|vs r|vия|bскyk|Забайкальскyk|Камчатскyk|Краснодnскyk|Красноярскyk|Пермскyk|Приморскyk|Ставропольскyk|Хабnmскyk|Амурso|nхангельso|Астраханso|Белгородso|Брянso|Владимирso|Волгоградso|Вологодso|Воронежso|Запорожso|Иванmso|Иркутso|Калининградso|Калужso|Кемерmso|Кузбасс|Кирmso|Костромso|Курганso|Курso|Ленинградso|Липецкаяo|Магаданso|Москmso|Мурманso|Нижегородso|Нmгородso|Нmосибирso|Омso|Оренбургso|Орлmso|Пензенso|Пскmso|Ростmso|Рязанso|Самnso|Сnатmso|Сахалинso|Свердлmso|Смоленso|Тамбmso|Тверso|Томso|Тульso|Тюменso|Ульянmso|Херсонso|Челябинso|Ярославso|Москва|Санкт-Петербург|Севастополь|Еврейsaаяo|Ненецкyaыйp|Ханты-Мансyскyaыйp|Югра|Чукотскyaыйp|Ямало-Ненецкyaыйp`.split(
    '|',
  );
let values = [
  385, 385, 49, 450, 450, 70, 367, 283, 283, 386, 360, 360, 358, 369, 369, 185,
  167, 295, 295, 291, 291, 424, 430, 77, 77, 362, 362, 420, 420, 67, 67, 426,
  426, 55, 364, 364, 428, 428, 56, 72, 83, 350, 60, 14, 90, 355, 80, 75, 163,
  414, 308, 241, 0, 400, 160, 394, 269, 153, 64, 236, 248, 50, 50, 10, 156, 40,
  305, 187, 398, 85, 140, 183, 3, 173, 30, 44, 460, 302, 440, 180, 344, 390,
  443, 410, 93, 20, 214, 392, 170, 34, 300, 25, 432, 273, 454, 150, 101, 190,
  290, 79, 166, 28, 28, 89, 29,
];

for (let i = 0; i < regions.length; i++) {
  let replaces = [
    'r',
    r,
    'k',
    k,
    'o',
    o,
    'p',
    p,
    's',
    s,
    'y',
    y,
    'a',
    a,
    'u',
    u,
    'd',
    d,
    'f',
    f,
    'g',
    g,
    'h',
    h,
    'z',
    z,
    'x',
    x,
    'v',
    v,
    'b',
    b,
    'n',
    'ар',
    'm',
    'ов',
  ];
  for (let j = 0; j < replaces.length / 2; j++) {
    regions[i] = regions[i].replace(replaces[j * 2], replaces[j * 2 + 1]);
  }
}

let distance = (s, t) => {
  let tl = t.length;
  let sl = s.length;
  if (!sl) return tl;

  if (!tl) return sl;

  let arr = [];

  for (let i = 0; i <= tl; i++) {
    arr[i] = [i];

    for (let j = 1; j <= sl; j++) {
      arr[i][j] = !i
        ? j
        : Math.min(
            arr[i - 1][j] + 1,

            arr[i][j - 1] + 1,

            arr[i - 1][j - 1] + (s[j - 1] == t[i - 1] ? 0 : 1),
          );
    }
  }

  return arr[tl][sl];
};

let min_distance = Infinity;
let min_index = 0;
for (let i = 0; i < regions.length; i++) {
  let dist = distance(input, regions[i]);
  if (dist < min_distance) {
    min_distance = dist;
    min_index = i;
  }
}

let index = values[min_index];

console.log(min_distance > 5 ? 800 : index < 100 ? index + 600 : index);
