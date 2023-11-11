const DB = require('../utils/db');
class UserModel {

    //functions 

    static async Register(id, username, password, firstName, lastName, email, adress, creditCard, products, requested, image)//all props of register
    {

        let user = { id, username, password, firstName, lastName, email, adress, creditCard, products, requested, image }
        //check U/u
        return await new DB().Insert('users', user);
    }


}

module.exports = UserModel;