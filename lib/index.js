var Command = require('commander').Command;
var program = new Command;
program
    .version('1.0.0')
    .description('A CLI for shortening and expanding URLs')
    .option('-s, --urlToShorten <value>', 'shorten the specified URL')
    .option('-e, --urlToExpand <value>', 'expand the specified URL')
    .parse(process.argv);
var userInput = program.opts();
if (userInput.urlToExpand) {
    console.log("this is the url to expand: ".concat(userInput.urlToExpand));
}
else if (userInput.urlToShorten) {
    console.log("this is the url to shorten: ".concat(userInput.urlToShorten));
}
else {
    program.outputHelp();
}
