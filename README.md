To run:

```
npm install
npm run start
```

[Follow instructions to load unpacked here](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)

In it's current form it should work fine.

To see bug change the content script in the manifest.json from `content.ts` to `content-with-emotion.ts`.
You may need to remove and read the extension in the extension tab.

Open the console and refresh any website. The error should be there.
