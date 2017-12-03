let state = {
    config: null,
    system: null,
    module: null,
    choices: {}
};

const subscriptions = [];

export const setSystem = ({system}) => {
    state.system = system;
    setState(state);
}

export const setChoice = ({name, choice}) => {
    state.choices[name] = choice;
    setState(state);
}

export const setModule = ({module}) => {
    state.module = module;
    setState(state);    
}

const setState = (newState) => {
    state = newState;
    
    subscriptions.forEach(subscription => {
        subscription(state);
    })
}

export const subscribe = (func) => {
    subscriptions.push(func);
}

export const unsubscribe = (func) => {
    var index = subscriptions.indexOf(func);
    if (index > -1) {
        subscriptions.splice(index, 1);
    }
}

export const getState = () => {
    return Object.assign({}, state);
};