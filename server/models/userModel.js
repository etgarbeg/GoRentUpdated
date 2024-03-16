const DB = require('../utils/db');
const bcrypt = require('bcrypt');
class UserModel {




    _id;
    username;
    firstName;
    lastName;
    password;
    email;
    adress;
    creditCard;
    products;
    requested;
    image;



    constructor(username, password, firstName, lastName, email, adress, creditCard, products, image) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.adress = adress;
        this.creditCard = creditCard;
        this.products = products;
        this.image = image;
        this.requested = null;//creating new user, no request yet
    }

    static async Register(username, password, firstName, lastName, email, country, city) {

        const user = {
            username: String(username),
            password: String(password),
            firstName: String(firstName),
            lastName: String(lastName),
            email: String(email),
            address: {
                city: String(city),
                street: "",  // You may need to provide street information if required
            },
            creditCard: {
                cardNo: "",
                exp: "",
                cvv: "",
            },
            products: [],
            requested: [],
            image: "",  // Provide a default image URL or handle image upload separately
            cart: [],
            messages: [],
        };

        try {
            const response = await new DB().Insert("users", user);
            console.log('Server Response:', response); // Log the entire response

            return { user: response };
        } catch (error) {
            console.error('Error during registration:', error);
            throw new Error('Registration failed');
        }
    }




    static async Login(email, password) {

        const user = await new DB().FindOne("users", { email: email });



        if (!user || user.password != password) {
            return null;
        }

        return { user };
    }
    // UserModel.js






    

    static async sendRentRequest(currentUser, userWithProduct, product) {
        try {
            userWithProduct.requested.push(product);

            // Assuming you have a method to update the user data in the database
            await this.updateUser(userWithProduct);

            return {
                currentUser: currentUser,
                product: product,
                userWithProduct: userWithProduct,
            };
        } catch (error) {
            console.error('Error during sending rent request:', error);
            throw new Error('Rent request failed');
        }
    }



    static async updateUser(userData) {
        try {
            // Database operation to update user
            await new DB().Update("users", { _id: userData._id }, userData);
        } catch (dbError) {
            console.error('Error during database operation:', dbError);
            throw new Error('Database operation failed');
        }
    }


    static async FindAll() {
        return await new DB().FindAll('users');
    }


    static async FindById(userId) {
        // Assuming you have a DB method to find a user by ID
        const user = await new DB().FindById("users", userId);

        // Return the found user or null if not found
        return user || null;
    }


    static async sendMessage(senderID, receiverID, txt, productRequestedID, timeStemp) {
        try {
            // Find sender and receiver users
            const senderUser = await UserModel.FindById(senderID);
            const receiverUser = await UserModel.FindById(receiverID);
    
            if (!senderUser || !receiverUser) {
                throw new Error("Sender or receiver not found.");
            }
    
            const message = {
                senderID: senderID,
                receiverId: receiverID,
                txt: txt,
                productRequestedID: productRequestedID,
                timeStemp: timeStemp
            };
    
         // Add the message to sender's messages array
console.log("Message added to sender's messages array:", message);
senderUser.messages.push(message);
await UserModel.updateUser(senderUser);

// Add the message to receiver's messages array
console.log("Message added to receiver's messages array:", message);
receiverUser.messages.push(message);
await UserModel.updateUser(receiverUser);

            return "Message sent successfully!";
        } catch (error) {
            throw error;
        }
    }
    
    


    static async updateProfile(userId, updatedProfile) {
        const db = new DB();
        await db.Update("users", { _id: userId }, updatedProfile);
    }




    static async getUserCart(userId) {
        const user = await UserModel.FindById(userId);
        return user ? user.cart : null;
    }

    static async getUserMessages(userId) {
        const user = await UserModel.FindById(userId);
        return user ? user.messages : null;
    }
    static async removeProductFromCart(userId, productId) {
        const user = await UserModel.FindById(userId);
        if (user) {
            user.cart = user.cart.filter(product => product.productId !== productId);
            await UserModel.updateUsers([user]);
        }
    }
    static async getUserRequestedProducts(userId) {
        const user = await UserModel.FindById(userId);
        return user ? user.requested : null;
    }
    static async changePassword(userId, newPassword) {
        const user = await UserModel.FindById(userId);
        if (user) {
            user.password = await bcrypt.hash(newPassword, 10);
            await UserModel.updateUsers([user]);
        }
    }

   

}




module.exports = UserModel;