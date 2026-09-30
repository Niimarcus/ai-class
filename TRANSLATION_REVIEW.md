# Translation review list (SYS-502, criteria 7 and 16)

Files: `cheatsheet-fr.html`, `stuck-fr.html`, `stepcards-fr.html` (French, required). `stepcards.html` is the English original. `cheatsheet-ht.html`, `stuck-ht.html`, `stepcards-ht.html` are Kreyòl ayisyen (optional).
Machine-drafted by Pollen from the English pages, using the terms in Sparecycle `PLANS/COPY_V0_KREYOL_FRENCH.md` (PR #13). Pollen is not a native speaker of either language.

**Scope (Marcus, 2026-09-30 18:12): English and French are required. Kreyòl blocks nothing.**

**Merge condition (Fizz): this PR does not merge until every FRENCH row below says `yes`.** This repo publishes the moment it merges. Do not print any file until its row says `yes`.

## French rows (gate the merge)

| File | reviewed | Reviewer | Date |
|---|---|---|---|
| cheatsheet-fr.html | no | | |
| stuck-fr.html | no | | |
| stepcards-fr.html | no | | |

**Open item for Marcus:** name the person who does the French read (one fluent reader, one sitting). Nobody is named yet.

## Kreyòl rows (do not block)

The Kreyòl pages ship in the PR but are **unlinked** from the README and from every page. Each one shows a yellow "Draft: not reviewed" bar on the page itself. They stay out of the print set until a native reader signs off.

| File | reviewed | Reviewer | Date |
|---|---|---|---|
| cheatsheet-ht.html | no | | |
| stuck-ht.html | no | | |
| stepcards-ht.html | no | | |

## Choices for the reviewer

- **Left in English on purpose.** Words students see on screen in GitHub and Claude: Commit changes, Copy raw file, Add file, Create new file, Settings, Pages, main, Save, Forgot password?, Use a recovery code, New chat, Chats, Recents, Copy, file names. Right, or should a gloss follow each one?
- **French.** Formal "vous" throughout. "Dépôt (repo)", "prompt", "actualiser", "Téléchargements" for Downloads.
- **Kreyòl.** "repo" and "prompt" kept, "modpas" for password, "imèl" for email, "nimewo A (A-number)", "ti lèt" for small letters, "kreyon" for the pencil icon. Is "ou / w" right for adult students? Does the Kreyòl sentence in the stuck page, step 7, read naturally?
- **Pages still English only.** `cambridge.html` and `signout.html` (links say "en anglais" or "an anglè"). The QR code on the cheat sheets points to `cambridge.html`.

## Layout check

Printed on US Letter from headless Chrome: `cheatsheet.html`, `cheatsheet-fr.html` and `cheatsheet-ht.html` are each 1 page (French needs a 9.3 pt print override, set inside the file). Step cards print on 2 pages.

## Step cards (criterion 16)

Five cards. Card 2 is "Pick your language, then read this": the language choice sits on the first screen above the privacy text (Fizz, SYS-502 build). Layout and text only. Each card has a dashed placeholder where the screenshot goes. Images wait until SYS-502 is on staging, because the screens change. Button names (Send, Listen, A-/A+) follow COPY_V0_KREYOL_FRENCH.md and must be checked against the built screens.
