const colors = require("colors");
colors.setTheme({
    brightMagenta: "brightMagenta",
    red: "red",
    brightRed: "brightRed",
    yellow: "yellow",
    brightBlue: "brightBlue",
    green: "green",
    blue: "blue"
})

exports.stdout = (process) => {
    switch (process){
        case 1:
            console.clear();
            console.log("Building File.".blue);
            console.log("");
            console.log("Compiling SCSS Files...".brightMagenta);
            break;
        case 2:
            console.clear();
            console.log("SCSS Files Compiled Successfully.".green)
            console.log("");
            console.log("Concatenating JS Files with Gulp...".brightRed);
            break;
        case 3:
            console.clear();
            console.log("Gulp Concat Successful.".green);
            console.log("");
            console.log("Minifying CSS...".brightBlue);
            break;
        case 4:
            console.clear();
            console.log("CSS Minified.".green);
            console.log("");
            console.log("Minifying JS...".yellow);
            break;
        case 5:
            console.clear();
            console.log("Your build was successful.".green);
            console.log("");
            console.log("See the output files in the ./dist folder.".cyan);
            break;
        default:
            console.log("ERR: An undefined process was called.".brightRed);
    }
}