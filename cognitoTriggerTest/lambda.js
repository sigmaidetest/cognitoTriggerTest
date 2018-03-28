let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {
	cognito_idp.adminCreateUser({
		UserPoolId: process.env.UserPoolId_cognitocognitoTestABC,

		/* required */
		Username: "Kasun1",

		/* required */
		DesiredDeliveryMediums: ["SMS"],
		//[SMS | EMAIL,/* more items */],
		ForceAliasCreation: false,
		MessageAction: "SUPPRESS",
		TemporaryPassword: "PAssowrd#123",
		UserAttributes: [],
		ValidationData: []
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		}
		console.log('output 1', data);
		// your logic goes within this block
	});


	cognito_idp.adminEnableUser({
		UserPoolId: process.env.UserPoolId_cognitocognitoTestABC,

		/* required */
		Username: "Amila"
		/* required */

	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		}
		console.log('output 2', data);
		// your logic goes within this block
	});

	cognito_idp.listUsers({
		UserPoolId: process.env.UserPoolId_cognitocognitoTestABC
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		}
		console.log('output 3', data);
		// your logic goes within this block
	});


	callback(null, 'Successfully executed');
}