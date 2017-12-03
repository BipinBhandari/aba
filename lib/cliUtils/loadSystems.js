import {join} from 'path';
import loadDirectoriesList from './loadDirectoriesList';

export default ({config}) => {
    // if (!config.structure.systems) throw new Error("Trying to load systems but no systems found on config file.");
    // return config.structure.systems;

    // const path = join(process.env.PWD, config.structure.root, system.root, "modules");
    // return getDirectoriesList({path}); 
    return loadDirectoriesList({config, type: "systems"});   
}