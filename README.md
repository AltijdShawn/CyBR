# CyBR
**Warning** The bot is incomplete so if you want to help feel free to help
<hr></hr>

### Required:
* FFMPEG (Installed on your system or add it to your project with `yarn add ffmpeg-static`)
* node.js (**16** or higher)
* Python2.7
* yarn (You can install it with `npm --global install yarn`)
* And a brain that knows how the Eris javascript framework works
* - Knowledge of [Yuuko](https://github.com/eritbh/yuuko).
* - Knowledge of [Eris](https://github.com/abalabahaha/eris).

### Configuration:
In `cfg.js`
```js
module.exports={
    TOKEN: "<The bot's token>",
    OWNER: "<Your user ID (Optional but required if you want to use Owner only functions)>",
    PREFIX: "<The bot's default prefix>",

    SECRET: "<The bot's client secret (Optional but required if you want the website to work)>",
    REDIRECT: "/auth/redirect",

    YTTOKEN: "<The Youtube API Token (Optional but required if you want to use the music functions)>",

    REPO: "https://github.com/project-helix/CyBR/",
}
```