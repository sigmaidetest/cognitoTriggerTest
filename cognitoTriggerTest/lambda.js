let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {
	cognito_idp.adminCreateUser({
		UserPoolId: process.env.UserPoolId_cognitoTestABC, /* required */
		Username: "amila1991", /* required */
		DesiredDeliveryMediums: ["SMS"],//[SMS | EMAIL,/* more items */],
		ForceAliasCreation: false,
		MessageAction: "RESEND",
		TemporaryPassword: "Abcs#123",
		UserAttributes: [],
		ValidationData: []
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		}
		// your logic goes within this block
	});


	callback(null, 'Successfully executed');
}