import _isArray from 'lodash/isArray';

const validate = (config) => {
    // if (!config)
    // if (!config.structure) throw new Error("No structure object present");
    // if (config.structure.universal){       
    //     if(!_isArray(config.structure.systems)){
    //         throw new Error("When app is universal, you need to define systems as an array.");
    //     }
        
    //     config.structure.systems.forEach(system => {
    //         if (system.hasModules){
    //             if (!system.module) throw new Error(`If system has modules, they need to have 'module' object. Not found in ${system.name}.`);
    //         }
    //     });
    // }
}

export default validate;