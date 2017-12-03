import {join} from 'path';
import {getDirectoriesList} from './loadDirectoriesList';

export default ({config, system}) => {
    // if (!system.hasModules) throw new Error(`System ${system.name} doesn't support modules.`);
    // const path = join(process.env.PWD, config.structure.root, system.root, "modules");

    // return getDirectoriesList({path});

    return loadDirectoriesList({config, type: "systems"});
}