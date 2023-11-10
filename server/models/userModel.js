const DB = require('../utils/db');
class UserModel {

    //functions 

    static async Register(username, password, image)//all props of register
    {

        let user = { username, password, image }
        //check U/u
        return await new DB().Insert('users', user);
    }


}

module.exports = UserModel;