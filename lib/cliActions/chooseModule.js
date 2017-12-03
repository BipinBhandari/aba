import {map, lensProp, view} from 'ramda';

import {setModule} from '../state';

const nameLens = lensProp('name');

export default async ({modules, context}) => {
    const options = map(view(nameLens))(modules);

    const answer = await context.prompt([{
         type: 'list',
         name: 'module',
         message: 'Please select the module:',
         choices: options
     }]);

     const module = modules.find(module => module.name === answer.module);
     setModule({module});

     return module;
}