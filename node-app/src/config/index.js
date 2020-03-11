/*************************
 * ENVIRONMENT VARIABLES
**************************/
module.exports = {
	databaseUrl: process.env.DATABASE_URI || 'mongodb://localhost:27017/art-proven',
	port: process.env.PORT || 8080,
	jwtTokenInfo: {
		secretKey: process.env.JWT_SECRET_KEY || 'this is my secret key',
		issuer: 'xyz',
		audience: 'xyz.com',
		algorithm: 'HS256',
		expiresIn: '24h'
	},
	bcrypt:{
		saltValue: 8
	}
};