const obj1 = [
  { x: 1, y: 5, z: 3 },
  { x: 3, y: 3, z: 7 },
];

const sameId = obj1.find((item) => item.x === 1);

console.log(sameId); // {x:1, y:5, z:3}

sameId.y = 10;

console.log(sameId); // {x:1, y:10, z:3}
