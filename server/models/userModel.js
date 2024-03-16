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
            // Update the user data in the database
            await DB().update('users', { _id: userData._id }, userData);
            console.log('User data updated successfully:', userData);
            return true; // Return true to indicate successful update
        } catch (error) {
            console.error('Error updating user data:', error);
            throw new Error('Failed to update user data');
        }
    }


    static async FindAll() {
        return await new DB().FindAll('users');
    }


    static async FindById(userId) {
      
        const user = await new DB().FindById('users', userId);

      
        return user || null;
    }


    static async sendMessage(senderID, receiverID, txt, productRequestedID, timeStemp) {
        try {
            console.log("het")
            // Construct the message object
            const message = {
                senderID: senderID,
                receiverId: receiverID,
                txt: txt,
                productRequestedID: productRequestedID,
                timeStemp: timeStemp
            };
    
            // Get the sender and receiver from the database
            const sender = await UserModel.FindById(senderID);
            const receiver = await UserModel.FindById(receiverID);
    
            // Push the message to the sender's messages array
            sender.messages.push(message);
    
            // Push the message to the receiver's messages array
            receiver.messages.push(message);
    
            // Update both sender and receiver in the database
            await Promise.all([
                UserModel.updateUser(sender),
                UserModel.updateUser(receiver)
            ]);
    
            console.log('Message sent successfully:', message);
            return true;
        } catch (error) {
            console.error('Error sending message:', error);
            throw new Error('Failed to send message');
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