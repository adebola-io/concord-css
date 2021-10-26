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

const log1 = () => {
    return new Promise ((resolve, reject)=>{
        const successful = true;
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

    successful?resolve():reject();
})
    })
    
}


const log2 = () => {
    return new Promise ((resolve, reject) => {
        const successful = true;
        console.log("SCSS to CSS Compilation Successful. Minifying CSS...".yellow);
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
    })

      successful?resolve():reject();
}

const log3 = () => {
    return new Promise ((resolve, reject)=>{
       const successful = true;

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

      successful?resolve():reject();
    })
}

