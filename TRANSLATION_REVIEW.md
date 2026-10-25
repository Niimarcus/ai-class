# Translation review list (SYS-502, criteria 7 and 16)

Files: `cheatsheet-fr.html`, `stuck-fr.html`, `stepcards-fr.html` (French, required). `stepcards.html` is the English original. `cheatsheet-ht.html`, `stuck-ht.html`, `stepcards-ht.html` are Kreyòl ayisyen (optional).
Machine-drafted by Pollen from the English pages, using the terms in Sparecycle `PLANS/COPY_V0_KREYOL_FRENCH.md` (PR #13). Pollen is not a native speaker of either language.

**Scope (Marcus, 2026-09-30 19:23): no proofreader blocks anything, for French or Kreyòl.** This list does not gate the merge and does not gate printing. The `reviewed` column stays `no` and is feedback only: if someone reads a page and finds a mistake, note it here and fix it in a later commit.

## French rows (feedback only)

| File | reviewed | Feedback |
|---|---|---|
| cheatsheet-fr.html | no | PR #5: class chat line changed (laptop first). |
| stuck-fr.html | no | PR #5: "Onglet fermé" item (laptop first) and the new prompt-button item. |
| stepcards-fr.html | no | PR #5: page rewritten. New checkpoint cards for Class 1 and Class 2. |

## Kreyòl rows (feedback only)

Kreyòl ships as **beta** (Marcus, 2026-09-30 18:14). Each Kreyòl page shows a small line at the top in Kreyòl: the translation is new and may have mistakes, tell your teacher if something is unclear. Marcus asks students in class how it reads and collects feedback. Nothing waits on a native review, and the pages are in the README and in the print set.

| File | reviewed | Feedback from class |
|---|---|---|
| cheatsheet-ht.html | no (beta), **needs native review (PR #5)** | Class chat line changed (laptop first). |
| stuck-ht.html | no (beta), **needs native review (PR #5)** | "Ou fèmen onglè a?" item (laptop first) and the new item "Touche bouton prompt pwofesè w la ankò...". |
| stepcards-ht.html | no (beta), **needs native review (PR #5)** | Page rewritten. New checkpoint cards for Class 1 and Class 2 (see below). |

## Choices for the reviewer

- **Left in English on purpose.** Words students see on screen in GitHub and Claude: Commit changes, Copy raw file, Add file, Create new file, Settings, Pages, main, Save, Forgot password?, Use a recovery code, New chat, Chats, Recents, Copy, file names. Right, or should a gloss follow each one?
- **French.** Formal "vous" throughout. "Dépôt (repo)", "prompt", "actualiser", "Téléchargements" for Downloads.
- **Kreyòl.** "repo" and "prompt" kept, "modpas" for password, "imèl" for email, "nimewo A (A-number)", "ti lèt" for small letters, "kreyon" for the pencil icon. Is "ou / w" right for adult students? Does the Kreyòl sentence in the stuck page, step 7, read naturally?
- **Pages still English only.** `cambridge.html` and `signout.html` (links say "en anglais" or "an anglè"). The QR code on the cheat sheets points to `cambridge.html`.

## Layout check

Printed on US Letter from headless Chrome: `cheatsheet.html`, `cheatsheet-fr.html` and `cheatsheet-ht.html` are each 1 page (Kreyòl needs a 9.6 pt print override for its beta line; French needs a 9.3 pt print override, set inside the file)). Step cards print on 2 pages.

## Step cards (criterion 16)

Updated in PR #5 (Cambridge Class 1 and Class 2, "I do, we do, you do"). The step cards now have two parts:

1. **Checkpoint cards**, with the same step numbers as `cambridge.html` (1.1, 2.3 ...): Class 1 has 4 checkpoints, Class 2 has 6. Each card ends with a green-card line.
2. **How the class chat works**: five cards. The screenshot placeholders are removed (no images exist).

Button names in the class chat come from Sparecycle `app/copy/fr.py` and `app/copy/ht.py`, with the English label in brackets, because the projector shows the English screen: « Réponses » (Answers), "Repons" (Answers), « Ajouter un fichier » (Add a file), "Ajoute yon fichye" (Add a file), and so on. GitHub button names and the teacher's prompt button labels stay in English.

### Kreyòl to check (PR #5, needs native review)

- Tags: "Chwa pa w" (Your choice), "Nan vitès pa w" (On your own), "Kat vèt" (Green card), "Pwen kontwòl" (Checkpoint).
- Catch-up line: "Ou rete dèyè? Chèche nimewo etap la sou ekran an. Rekòmanse depi dènye pwen kontwòl vèt ou. Yon asistan ap vin ede w."
- "Swiv pwofesè a sou pwojektè a: yon etap alafwa."
- "Seleksyone depi tit travay la jiska lafen."
- "Trennen resume.html ladan l." (drag in)
- "Lis pou dekonekte" (sign-out checklist).
- "Envite (Guest) oswa Enkoyito (Incognito)" for the browser window names.

### French choices (PR #5)

- "Point de contrôle", "Carte verte", "À votre rythme" (On your own), "Votre choix".
- No-break spaces: U+202F before ? ! ; and U+00A0 before : and inside « ». Applied to `stepcards-fr.html`, `cheatsheet-fr.html` and `stuck-fr.html`. Text in [BRACKETS] (prompt parts) is left as in the English prompt.
