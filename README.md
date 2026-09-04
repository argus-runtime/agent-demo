# agent-demo

A tiny JavaScript utility library used to demo an autonomous fork-and-fix agent.
It ships with **two deliberate bugs**, each described in an open issue. Run the test
to see them fail:

```bash
node test.mjs
```

- `src/math.js` — `sumTo(n)` (sum of 1..n)
- `src/text.js` — `capitalize(s)`

See the open issues for the bug reports.
