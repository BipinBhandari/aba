

export default ({config}) => {
    if (!config.structure.systems) throw new Error("Trying to load systems but no systems found on config file.");
    return config.structure.systems;
}