# AniVerse — beginner-friendly anime discovery site

AniVerse is a static website built with plain HTML, CSS, and JavaScript. It needs no database, paid hosting, or build tool.

## Try it locally
1. Extract `aniverse-upgraded.zip`.
2. Open the `aniverse-starter` folder.
3. Double-click `index.html`.
4. Search titles, filter by genre, and select **Read details**.
5. Use the official links on each detail page to check viewing availability.

## Update your existing GitHub Pages site
1. Extract the ZIP.
2. Upload/replace `index.html`, `style.css`, `script.js`, and `README.md` in your existing repository.
3. Commit the changes and wait for GitHub Pages to rebuild.
4. Test the live site on desktop and mobile.

## Add or edit an anime
Open `script.js` and find `const anime = [`. Copy a complete object inside the array and edit its values. Each entry has a unique `id`, title, genre, year, original short/full descriptions, a `whyWatch` note, decorative poster placeholders, and official website/service search links. Use a unique URL-friendly `id` such as `my-new-anime`. Separate entries with commas.

## Important
- The summaries are original AniVerse text; verify details before publishing changes.
- Poster graphics are CSS-made placeholders, not official artwork. Use only artwork you own or have permission to publish.
- Streaming availability, language options, and subscriptions vary by country. A search link does not guarantee availability.
- AniVerse links out to official services and does not host or embed episodes.
- Before adding ads or making the site commercial, check that your hosting provider and ad network allow your intended use.
