var { exec }= require("child_process");

const colors = require("colors");
colors.setTheme({
    brightMagenta: "brightMagenta",
    red: "red",
    yellow: "yellow",
    brightBlue: "brightBlue"})

const log1 = () => {
    return new Promise ((resolve, reject)=>{
        console.log("Compiling SCSS...".brightMagenta);
        var cmd = exec("npm run compile-css", (err, stdout, stderr)=>{
        if (err) {
        console.error(`Error!`.red);
        console.log(err.message.red);
        return;
    }
    if (stderr) {
        console.error(stderr);
        return;
    }

    error?reject:resolve;
})
    })
    
}


const log2 = () => {
    console.log("SCSS to CSS Compilation Successful. Minifying CSS...".yellow)
    var cmd2 = exec("npm run minify-css", (err, stdout, stderr)=>{
    if (err) {
        console.error(`Error!`.red);
        console.log(err.message.red);
        return;
    }
    if (stderr) {
        console.error(stderr);
        return;
    }
    })
}

const log3 = () => {
    console.log("CSS Minified Successfully. Concatenating JS Files..".brightBlue)
    var cmd = exec("npm run compile-css", (err, stdout, stderr)=>{
    if (err) {
        console.error(`Error!`.red);
        console.log(err.message.red);
        return;
    }
    if (stderr) {
        console.error(stderr);
        return;
    }
})
}

const logAll = (log1, log2) => {
    log1();
    log2();
}

logAll(log1, log2);