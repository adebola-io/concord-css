const colors = require("colors");
colors.setTheme({
    blue: "blue",
    green: "green",
    yellow: "yellow",
    magenta: "magenta",
    error: "red"
})
console.clear();
console.log('Your build was successful.'.green);
console.log('See build files in the ./dist directory.'.magenta);