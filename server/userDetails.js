const mongoose = require("mongoose");
const { string, object, array } = require("yup");

const UserDetailsSchema = new mongoose.Schema(
    {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        username: string,
        adress: object,
        creditCard: object,
        products: array,
        requested: array



    }
)