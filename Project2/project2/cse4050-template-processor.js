'use strict';

function Cse4050TemplateProcessor(template) {
    function fillIn(dictionary) {
        const regex = /(\{\{\w+\}\})/g;
        const a = template.match(regex);

        for(const e of a){
            if(dictionary[e.slice(2, -2)]) {
                template = template.replace(e, dictionary[e.slice(2, -2)]);
            }
            else 
                template = template.replace(e, '');
        }

        return template;
    }
    
    return {fillIn};
}