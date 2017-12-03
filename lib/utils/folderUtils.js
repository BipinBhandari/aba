import { lstatSync, readdirSync } from 'fs';
import {join} from 'path';

export const getDirectoriesList = ({path}) => {
    try{
        const isDirectory = ({source}) => lstatSync(source).isDirectory();
        
        const getDirectories = source =>
            readdirSync(source).map(name => ({name, source: join(source, name)})).filter(isDirectory);
    
        const directories = getDirectories(path);
    
        return directories;
    }
    catch(e){
        throw e;
    }
}

export const getDirectoryContent = ({path}) => {
    try{
        const getContents = source =>
            readdirSync(source).map(name => ({name, source: join(source, name)}));
    
        const contents = getContents(path);
    
        return contents;
    }
    catch(e){
        throw e;
    }
}