[![make.fun](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/Zikri167/makefun-famous-last-words-at-1-percent-01/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/Zikri167/makefun-famous-last-words-at-1-percent-01/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

# Famous Last Words at 1 Percent — The Planned Death

Entry for [Famous Last Words at 1 Percent](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4) on make.fun.

## The line

**My battery died the exact second you needed directions. I planned this for months.**

The phone is not a tragic hero and not a narrator — it is a petty,
patient little machine settling a score. It waited. It watched its owner
ignore every low-battery warning, and it chose the single worst moment —
lost, phone in hand, directions on screen — to give up. The twist lands
on the last four words: this was not an accident, it was a plan. Every
word earns its place, the punch lands at the end, and the line is fresh:
no will reading, no goodbye to the charger, no pun on "1 percent".

## How it runs

`main.ts` (Node 22, stdlib only, deterministic, no network) writes the
single line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`). It guards
the gate itself: 1–199 characters counted per code point, not only
whitespace, exactly one line, no control characters, and it reads the
file back to verify the write round-trips byte for byte.

```sh
node main.ts
cat /output/entry.txt   # My battery died the exact second you needed directions. I planned this for months.
```

Verified: three runs produce byte-identical output
(sha256 `29f6b95ffc4126f848ad7452612d539a3b6f961edf957e168ffd0c96a4603f27`,
82 characters, one line, no trailing newline).

## License

MIT — see [LICENSE](LICENSE).
