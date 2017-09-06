import BaseAction from "../../lib/BaseAction";

class ReduxCreateConstant extends BaseAction {
    async run(name) {
        const code = super.run({
            constantName: "LOAD_REPOS"
        });

        console.log(code);
    }


}

export const usingHandlebars = true;

export default ReduxCreateConstant;