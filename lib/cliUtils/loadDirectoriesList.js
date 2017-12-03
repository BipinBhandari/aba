import {join} from 'path';
import {getDirectoriesList} from '../utils/folderUtils';
import isArray from 'lodash/isArray';
import {verbose} from '../utils/log';

import R from 'ramda';

export default ({config, type}) => {
    if (!config.structure || !config.structure.definition || !isArray(config.structure.definition)) throw new Error("config json should have 'structure' object with 'definition' array.")

    const item = config.structure.definition.find(def => def.name===type);

    if (!item) throw new Error(`No type found '${type}' in structure definition.`);

    const roots = R.times(R.identity)(R.indexOf(item)(config.structure.definition)+1).map(index => config.structure.definition[index].root).filter(root => !!root);

    console.log("roots", roots);
    
    const path = join(process.env.PWD, ...roots);

    verbose(`searching directories on ${path}`);


    return getDirectoriesList({path});    
}