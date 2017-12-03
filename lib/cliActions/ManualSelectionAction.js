import chooseSystem from './chooseSystem';
import loadModules from '../cliUtils/loadModules';
import loadSystems from '../cliUtils/loadSystems';
import chooseModule from './chooseModule';

export default async ({config, context}) => {
    try {
        const systems = loadSystems({config});
        // const system = await chooseSystem({context, systems});
        // const modules = loadModules({system, config});
        // const module = await chooseModule({modules, context});
        // console.log(module);

        console.log("systems", systems);
        // return module;
    }catch(err){
        throw err;
    }
}