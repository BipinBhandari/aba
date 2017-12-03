#! /usr/bin/env node

import vorpal from 'vorpal';
import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

import loadConfig from './base/loadConfig';
import validate from './base/validate';
import folderStruture from './actions/folderStructure';
import getBreadcrumb from './cliUtils/getBreadcrumb';
import optionPicker from './cliActions/optionPicker'

import { getDirectoryContent } from './utils/folderUtils';

import ManualSelectionAction from './cliActions/ManualSelectionAction';

import {error, success} from './utils/log';

import log from './utils/log';

import {getState, subscribe as subscribeToStateChange} from './state';

var base = process.env.PWD;
console.log("base", base);

const v = vorpal();

try{
    const config = loadConfig({baseDir: base});
    validate(config);    

    subscribeToStateChange((state) => {
        v.delimiter(`aba ${getBreadcrumb({config, state})} @ `);
    })
    
    config.commands.map(({command, name, description, options}) => {
        let cmd = v.command(command, description);
        options.forEach(({short, long, description, possible_options}) => cmd.option(`${short}${long?`, ${long}`:""}`, description, possible_options));
        
        cmd.action((args, callback) => {
            try{
                const actionFunc = require(`${base}/aba/generators/${name}`);
                actionFunc.default({args, 
                    picker: optionPicker, 
                    getDirectoryContent,
                    base, 
                    config, 
                    log, 
                    Handlebars,
                    path, 
                    fs,
                    handleError: error
                });
                callback();
            }
            catch(e){
                throw e;
            }
        })

    })

    v
    .delimiter('aba @ ')
    .show();
}catch(err){
    error(err);
}