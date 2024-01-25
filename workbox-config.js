module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,js,json,zip,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};