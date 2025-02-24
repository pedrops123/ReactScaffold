export default function (plop) {
    // create your generators here
    plop.setGenerator('component', {
        description: 'Default component react for our project',
        prompts: [
        {
            type: 'input',
            name: 'path',
            message: 'Insira o caminho a criar o componente'
        },
        {
            type: 'input',
            name: 'name',
            message: 'Insira o nome do seu componente'
        }],
        actions: [{
            type: 'add',
            path: '{{path}}/{{name}}/{{name}}.jsx',
            templateFile: 'plop-templates/component.hbs'
        }]
    });

    plop.setGenerator('page', {
        description: 'Default page react for our project',
        prompts: [
        {
            type: 'input',
            name: 'path',
            message: 'Insira o caminho a criar a pagina'
        },
        {
            type: 'input',
            name: 'pagename',
            message: 'Insira o nome da sua pagina'
        }],
        actions: [{
            type: 'add',
            path: '{{path}}/{{pagename}}/{{pagename}}.jsx',
            templateFile: 'plop-templates/page.hbs'
        }]
    });
};