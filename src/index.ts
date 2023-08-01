import 'dotenv/config';
const { Command } = require('commander');

import shorten from './shorten';
import expandUrl from './expand';

const program = new Command

program
  .version('1.0.0')
  .description('A CLI for shortening and expanding URLs')
  .option('-s, --urlToShorten <value>', 'shorten the specified URL')
  .option('-e, --urlToExpand <value>', 'expand the specified URL')

program.parse(process.argv)

const userInput = program.opts();

if (userInput.urlToExpand) {
  expandUrl(userInput.urlToExpand)
} else if (userInput.urlToShorten) {
  shorten(userInput.urlToShorten)
} else {
  program.outputHelp();
}