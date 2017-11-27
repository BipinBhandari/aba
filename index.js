import vorpal from 'vorpal';

import loadConfig from './base/loadConfig';
import validate from './base/validate';
import folderStruture from './actions/folderStructure';
import loadSystems from './cliUtils/loadSystems';

import chooseSystem from './cliActions/chooseSystem';

import {error, success} from './utils/log';

import {getState, subscribe as subscribeToStateChange} from './state';

var base = process.env.PWD;
console.log("base", base);

const v = vorpal();

subscribeToStateChange((state) => {
    v.delimiter(`aba ${state.system?`[M (${state.system.name})]`:""} @ `);
})

try{
    const config = loadConfig({baseDir: base});
    validate(config);

    // folderStruture({config});

    const systems = loadSystems({config});
    
    v
    .command('generate', 'Generate".')
    .action(function(args, callback) {
        const context = this;

      chooseSystem({context, systems}).then(
          system => {
              success(system);
              
              callback();
          }
      );
    });

    v
    .delimiter('aba @ ')
    .show();
}catch(err){
    error(err);
}