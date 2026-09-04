// Small string utilities.

/**
 * Capitalize the first letter of a string.
 * capitalize("hello") === "Hello"
 * capitalize("") === ""      (empty string stays empty)
 */
export function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);   // BUG (issue #2): throws on "" — s[0] is undefined
}
