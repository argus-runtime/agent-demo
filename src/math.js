// Small math utilities.

/**
 * Sum of the integers from 1 to n, inclusive.
 * sumTo(5) === 1 + 2 + 3 + 4 + 5 === 15
 */
export function sumTo(n) {
  let total = 0;
  for (let i = 1; i < n; i++) {   // BUG (issue #1): should be i <= n — this excludes n
    total += i;
  }
  return total;
}
