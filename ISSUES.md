# Issues to open on the upstream repo

Create these two issues (copy title + body) after you push the demo-repo contents to
your org's `agent-demo` repo. The agent reads them via the GitHub MCP.

---

## Issue #1
**Title:** `sumTo` returns the wrong total (off-by-one)

**Body:**
`sumTo(n)` in `src/math.js` should return the sum of the integers 1..n **inclusive**,
but it excludes `n`.

Reproduce:
```
node -e "import('./src/math.js').then(m => console.log(m.sumTo(5)))"
# prints 10, expected 15
```
Expected: `sumTo(5) === 15`.

---

## Issue #2
**Title:** `capitalize` throws on an empty string

**Body:**
`capitalize(s)` in `src/text.js` throws a `TypeError` when `s` is `""`
(`Cannot read properties of undefined (reading 'toUpperCase')`).

Reproduce:
```
node -e "import('./src/text.js').then(m => console.log(m.capitalize('')))"
# TypeError
```
Expected: `capitalize("") === ""` (an empty string stays empty).
