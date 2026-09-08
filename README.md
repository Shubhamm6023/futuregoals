# Future — learning roadmap PWA

A hacker-style learning app built for **SHUBHAM RAO**. Every topic has one
page with a best video, a Hindi/Hinglish video, easy notes, an example,
2 MCQs and a practice task — plus a terminal boot screen, matrix-rain live
wallpaper, and an in-app AI assistant.

## Tech

Plain HTML + CSS + JS (no build step), installable PWA, hosted on GitHub Pages.

## Deploy (automatic)

Push to `main` → GitHub Actions deploys to
`https://shubhamm6023.github.io/futuregoals/` and updates the service worker.

## Make a new Android release

1. Bump the version in `android/twa-manifest.json` (`appVersionName`,
   `appVersionCode`).
2. Push a tag:
   ```bash
   git tag v3.0.0
   git push origin v3.0.0
   ```
3. The **Android Release** workflow builds a **signed** APK + AAB with
   Bubblewrap and creates a GitHub Release with both files attached.
   - `app-release-signed.apk` → install directly on your phone (allow
     "Install unknown apps").
   - `app-release-bundle.aab` → upload to Google Play.

You can also run the workflow manually (Actions → Android Release → Run
workflow) without a tag.

## Signing key (important)

`android/future-release.keystore` is committed so every build uses the same
key (required for app updates to install over old versions). Its SHA-256
fingerprint is registered in `.well-known/assetlinks.json` so the app runs as
a full-screen Trusted Web Activity.

⚠️ Before publishing to **Google Play**, generate your own private keystore,
store it as a GitHub secret, and remove the committed one.