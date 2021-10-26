var { exec }= require("child_process");
const colors = require("colors");
colors.setTheme({
    brightMagenta: "brightMagenta",
    red: "red",
    yellow: "yellow",
    brightBlue: "brightBlue",
    green: "green",
    blue: "blue"
})

console.log("Minifying Compiled CSS...".brightMagenta);
exec("npm run compile-css", (err, stdout, stderr)=>{
    if (err) {
        console.error(`CSS Minification failed.`.red);
        console.log(err.message.red);
        return;
    }
    if (stderr) {
        console.error(stderr);
        return;
    }
    console.log("CSS Minifying successful.".green);
})

