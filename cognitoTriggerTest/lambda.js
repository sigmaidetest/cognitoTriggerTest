let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {
	cognito_idp.adminCreateUser({
		UserPoolId: process.env.UserPoolId_cognitocognitoTestABC,

		/* required */
		Username: "Kasun",

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
		// your logic goes within this block
	});


	cognito_idp.adminDisableUser({
		UserPoolId: process.env.UserPoolId_cognitocognitoTestABC,

		/* required */
		Username: "Amila"
		/* required */

	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		}
		// your logic goes within this block
	});

	cognito_idp.adminEnableUser({
		UserPoolId: "us-east-1_KtFzugXbq", /* required */
		Username: "amila" /* required */
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		}
		// your logic goes within this block
	});




	callback(null, 'Successfully executed');
}