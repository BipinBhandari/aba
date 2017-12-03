import {map, lensProp, view} from 'ramda';

import {setChoice} from '../state';

const nameLens = lensProp('name');

export default async ({name, options, context}) => {
    const choices = map(view(nameLens))(options);

    const answer = await context.prompt([{
         type: 'list',
         name: 'choice',
         message: `Please select the ${name}:`,
         choices
     }]);

     const choice = options.find(option => option.name === answer.choice);
     choice.index = options.indexOf(choice);
     setChoice({name, choice});

     return choice;
}