export default function (plop) {
    // create your generators here
    plop.setGenerator('component', {
        description: 'Default component react for our project',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Insira o nome do seu componente'
        }],
        actions: [{
            type: 'add',
            path: 'src/Components/{{name}}/{{name}}.jsx',
            templateFile: 'plop-templates/component.hbs'
        }]
    });

    plop.setGenerator('page', {
        description: 'Default page react for our project',
        prompts: [{
            type: 'input',
            name: 'pagename',
            message: 'Insira o nome da sua pagina'
        }],
        actions: [{
            type: 'add',
            path: 'src/Pages/{{pagename}}/{{pagename}}.jsx',
            templateFile: 'plop-templates/page.hbs'
        }]
    });
};