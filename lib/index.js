"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const { Command } = require('commander');
const shorten_1 = __importDefault(require("./shorten"));
const expand_1 = __importDefault(require("./expand"));
const program = new Command;
program
    .version('1.0.0')
    .description('A CLI for shortening and expanding URLs')
    .option('-s, --urlToShorten <value>', 'shorten the specified URL')
    .option('-e, --urlToExpand <value>', 'expand the specified URL');
program.parse(process.argv);
const userInput = program.opts();
if (userInput.urlToExpand) {
    (0, expand_1.default)(userInput.urlToExpand);
}
else if (userInput.urlToShorten) {
    (0, shorten_1.default)(userInput.urlToShorten);
}
else {
    program.outputHelp();
}
//# sourceMappingURL=index.js.map