const path = require('path');
const fs = require('fs');
const Handlebars = require('handlebars');

export default class BaseAction {
    getActionName() {
        return this.constructor.name;
    }

    template() {
        if (this._template) {
            return this._template;
        } else {
            const templateData = fs.readFileSync(path.join(process.cwd(), "actions", this.getActionName(), "template.hbs")).toString();
            this._template = Handlebars.compile(templateData);
        }

        return this._template;
    }

    run(data) {
        return this.template()(data);
    }
}