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

const process1 = () => {
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


const process2 = () => {
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

const process3 = () => {
    return new Promise ((resolve, reject)=>{
       const successful = true;

       console.log("CSS Minified Successfully. Concatenating JavaScript Files..".brightBlue)
       var cmd = exec("npm run compile-js", (err, stdout, stderr)=>{
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


const process4 = () => {
    return new Promise ((resolve, reject)=>{
       const successful = true;

       console.log("Gulp Concat Successful. Minifying JS..".yellow)
       var cmd = exec("npm run minify-js", (err, stdout, stderr)=>{
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

const process5 = () => {
    return new Promise ((resolve, reject)=>{
      const successful = true;
      console.log("Your Build is successful.".green);
      console.log("See your compiled files in the ./dist folder.".green);
      successful?resolve():reject();
    })
}
