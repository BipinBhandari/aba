import {map, lensProp, view} from 'ramda';

import {setSystem} from '../state';

const nameLens = lensProp('name');

export default async ({systems, context}) => {
    const options = map(view(nameLens))(systems);

    const answer = await context.prompt([{
         type: 'list',
         name: 'system',
         message: 'Please select the system:',
         choices: options
     }]);

     const system = systems.find(system => system.name === answer.system);
     setSystem({system});

     return system;
}