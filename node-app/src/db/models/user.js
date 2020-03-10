const validator =require('validator');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../../config');
/**
 * Creating User Schema Model
 */
const userSchema = new Schema({
	user_name: {
		type: String,
		required: true,
		trim: true
	},
	user_email: {
		type: String,
		required: true,
		trim: true,
		validate: function (user_email) {
			return validator.isEmail(user_email);
		}
	},
	user_password: {
		type: String,
		required: true,
		trim: true
	},
	user_verified: {
		type: Boolean,
		default: false
	}
},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});
/**
 * Method to Encrypt User password before Saving to Database
 */
userSchema.pre('save', function(next) {
	let user = this;
	let salt = config.bcrypt.saltValue;
	// only hash the password if it has been modified (or is new)
	if (!user.isModified('user_password')){
		return next();
	}
	// generate a salt
	bcrypt.genSalt(salt, function(err, salt) {
		if (err) return next(err);
		// hash the password with new salt
		bcrypt.hash(user.user_password, salt, function(err, hash) {
			if (err) return next(err);
			// override the plain password with the hashed one
			user.user_password = hash;
			next();
		});
	});
});

function validateUser(user){
    const schema = {
        userName: Joi.string().min(5).max(20).required(),
        userEmail: Joi.string().min(10).max(30).email().required(),
        userAadhar: Joi.number().required(),
        userPassword: Joi.string().required(),
        userPhone: Joi.string().min(10).max(10).required()
    }
    return Joi.validate(user,schema);
}
exports.User = mongoose.model('Users', userSchema);
exports.validate = validateUser