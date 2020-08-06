module.exports = plop => {
	plop.setGenerator('component', {
		description: 'Create a component',
		// User input prompts provided as arguments to the template
		prompts: [
			{
				// Raw text input
				type: 'input',
				// Variable name for this input
				name: 'name',
				// Prompt to display on command line
				message: 'What is your component name?',
			},
			{
				type: 'input',
				name: 'route',
				message: 'What is the route to your component? Eg: pages/example',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/{{route}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
				templateFile: 'plop-templates/Component.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/{{route}}/{{pascalCase name}}/{{pascalCase name}}.scss',
			},
			{
				// Action type 'append' injects a template into an existing file
				type: 'append',
				path: 'src/styles/index.scss',
				pattern: `/* PLOP_COMPONENTS_IMPORT */`,
				template: `@use './{{route}}/{{pascalCase name}}/{{pascalCase name}}.scss';`,
			},
		],
	})
}
