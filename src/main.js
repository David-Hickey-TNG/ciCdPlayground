import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'David',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Taking forever to run',
			'Strange error messages in my email inbox like THERE WERE NO FAILURES'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins, Bitbucket?',
		// What do you want to learn in this workshop? 
		expectations: [
			'How the stuff I\'m using works'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'running', 
			'baking', 
			'bouldering',
			'judo (just started)'
		]
	}
});
