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
            console.log("Concatenating TS Files with Gulp...".brightRed);
            break;
        case 3:
            console.clear();
            console.log("Typescript Files Concatenated.".blue);
            console.log("");
            console.log("Compiling to JS...".brightMagenta);
            break;
        case 4:
            console.clear();
            console.log("JS Files Compiled Successfully.".green);
            console.log("");
            console.log("Minifying CSS...".brightBlue);
            break;
        case 5:
            console.clear();
            console.log("CSS Minified.".green);
            console.log("");
            console.log("Minifying JS...".yellow);
            break;
        case 6:
            console.clear();
            console.log("Your build was successful.".green);
            console.log("");
            console.log("See the output files in the ./dist folder.".cyan);
            break;
        default:
            console.log("ERR: An undefined process was called.".brightRed);
    }
}