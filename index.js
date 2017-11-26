import vorpal from 'vorpal';

import loadConfig from './base/loadConfig';
import validate from './base/validate';

import {error} from './utils/log';

var base = process.env.PWD;
console.log("base", base);

const v = vorpal();

try{
    const config = loadConfig({baseDir: base});
    validate(config);

    v
    .command('generate', 'Welcome to generator".')
    .action(function(args, callback) {
      this.log('bar');
      callback();
    });

    v
    .delimiter('daffy$')
    .show();
}catch(err){
    error(err);
}