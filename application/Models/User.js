const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const HASH_ROUNDS = 12;


const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
}, {timestamps: true});

/**
 * @returns {Promise}
 */
UserSchema.methods.setPassword = function(password){
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(HASH_ROUNDS, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                this.password = hash
                resolve(hash);
            });
        });
    });
}

/**
 * @reutrns {Promise<T>}
 */
UserSchema.methods.validPassword = function(password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, function(err, res) {
            return resolve(res)
        });
    })
};
    
module.exports = mongoose.model('User', UserSchema)
