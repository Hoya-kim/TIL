function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }, () => 0);
  let count = 0;
  let sum = 0;
  while (truck_weights.length) {
    let shifted = bridge.shift();
    if (shifted > 0) sum -= shifted;
    if (sum + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      sum += truck;
      bridge.push(truck);
    } else {
      bridge.push(0);
    }
    count++;
  }
  return count + bridge_length;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
