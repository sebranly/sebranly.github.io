JSON data to be consumed by the project living at [https://github.com/sebranly/ctr-ocr](https://github.com/sebranly/ctr-ocr)

- `players.json` contains a finite list of all AI characters from the video game Crash Team Racing: Nitro-Fueled.
  - the file is a key-value JSON object: each key is the ISO 639-1 code (two letters) for the language, and the corresponding value is an exhaustive array of all AI characters' names in this language. The key `en` is the default.
- `users.json` contains a non-finite list of human players from the same video game
  - the file is a key-value JSON object: each key is the platform and accepts only three values (`playstation`, `switch` and `xbox`), and the corresponding value is an array of some (but not all) human players on this platform.
