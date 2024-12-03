function findLongestRoute(citiesInput) {
  const cities = citiesInput.split(', ').filter((city) => city);

  const graph = {};

  // Build the graph

  for (const city of cities) {
    const c = city[0].toLowerCase();

    if (!graph[c]) {
      graph[c] = [];
    }

    graph[c].push(city);
  }

  // Sort the cities for each last character to ensure alphabetical order

  for (const char in graph) {
    graph[char].sort();
  }

  const allPaths = [];

  // DFS to find all paths

  const stack = [];

  for (const city of cities) {
    stack.push([city]);
  }

  while (stack.length) {
    const path = stack.pop();
    const lastCity = path[path.length - 1];
    const lastChar = lastCity[lastCity.length - 1].toLowerCase();

    if (
      !graph[lastChar] ||
      graph[lastChar].every((city) => path.includes(city))
    ) {
      allPaths.push(path);

      if (allPaths.length > 100000) break;

      continue;
    }

    for (const nCity of graph[lastChar]) {
      if (!path.includes(nCity)) {
        stack.push([...path, nCity]);
      }
    }
  }

  // Find the longest path

  let longestPath = [];

  let startCity = '';

  let endCity = '';

  for (const path of allPaths) {
    if (path.length > longestPath.length) {
      longestPath = path;

      startCity = path[0];

      endCity = path[path.length - 1];
    } else if (path.length === longestPath.length) {
      const currentStart = path[0];

      if (
        currentStart < startCity ||
        (currentStart === startCity && path[path.length - 1] < endCity)
      ) {
        longestPath = path;

        startCity = currentStart;

        endCity = path[path.length - 1];
      }
    }
  }

  // Output the result

  if (longestPath.length < 2) {
    console.log(1);
  } else {
    console.log(`${startCity} ${endCity} ${longestPath.length}`);
  }
}

// Get input from command line arguments

const citiesInput = process.argv[2];

if (!citiesInput) {
  console.error('Please provide a list of cities as input.');

  process.exit(1);
}

findLongestRoute(citiesInput);
