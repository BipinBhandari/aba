module.exports = {
    default: ({args, getDirectoryContent, base, config, log, fs, path, Handlebars, handleError}) => {
        try{
            const target_path = path.join(base, "app", args.system, "modules", args.module, args.type);
        
            if (!fs.existsSync(target_path)) throw new Error(`No folder found on - ${target_path}`)
            
            const target = path.join(target_path, args.name);
            if (fs.existsSync(target)) throw new Error(`Target directory already exists with name ${args.name} on ${target_path}`)
            fs.mkdirSync(target);
            
            const template_path = path.join(base, "aba","templates");
            if (!fs.existsSync(target_path)) throw new Error(`No template directory found on - ${template_path}`)
            
            const contents = getDirectoryContent({path: path.join(template_path, "component")});
                
            contents.map(({name, source})=>{
                const content = fs.readFileSync(source, 'utf8');
                const template = Handlebars.compile(content);
                
                const data = {
                    ...args.options,
                    name: args.name 
                };
                
                const result = template(data);
                const newName = name.replace("%name%", args.name).replace(".hbs", "");
                fs.writeFileSync(path.join(target, newName), result);     
                log.success(`✓ Created! - ${path.join(target, newName)}`);   
            })    
        }
        catch(e){
            handleError(e);
        }
    }
}