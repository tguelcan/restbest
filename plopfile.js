module.exports = function (plop) {

    // api endpoint generator
    plop.setGenerator('service', {
        description: 'Api endpoint generator',
        prompts: [
            {
                type: 'input',
                name: 'endpointName',
                message: 'name of the endpoint in singular like "message" or "article"'
            }],
        actions: [
            {
                type: 'add',
                path: 'src/api/{{lowerCase endpointName}}/index.js',
                templateFile: '_templates/src/api/_index.hbs'
            },
            {
                type: 'add',
                path: 'src/api/{{lowerCase endpointName}}/controller.js',
                templateFile: '_templates/src/api/_controller.hbs'
            },
            {
                type: 'add',
                path: 'src/api/{{lowerCase endpointName}}/model.js',
                templateFile: '_templates/src/api/_model.hbs'
            },
            {
                type: 'add',
                path: 'test/api/{{lowerCase endpointName}}.test.js',
                templateFile: '_templates/test/api/_apitest.hbs'
            },
            {
                type: 'append',
                path: 'src/api/index.js',
                pattern: '/* ENDPOINT_ROUTER_IMPORT */',
                template: 'import {{lowerCase endpointName}} from \'./{{lowerCase endpointName}}\'',
            },
            {
                type: 'append',
                path: 'src/api/index.js',
                pattern: '/* ENDPOINT_ROUTER_EXPORT */',
                template: 'router.add(\'/{{lowerCase endpointName}}s\', {{lowerCase endpointName}})',
            },
        ]
    })
}