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
            password: String(password), // Remember to hash the password in a real implementation
            firstName: String(firstName),
            lastName: String(lastName),
            email: String(email),
            adress: {
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
    static async sendRentRequest(currentUserId, productId) {

        try {
            const currentUser = this.FindById(currentUserId)
            currentUser.cart.push(productId);

            await this.updateUser(currentUser);

            return {
                productId

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


    static async sendMessage(senderId, receiverId, text) {
        try {
            // Find sender and receiver users
            const senderUser = await UserModel.FindById(senderId);
            const receiverUser = await UserModel.FindById(receiverId);

            if (!senderUser || !receiverUser) {
                throw new Error("Sender or receiver not found.");
            }

            // Create a message object
            const message = {
                sender: senderUser.name,
                receiver: receiverUser.name,
                text: text,
                timestamp: new Date().toISOString(), // Include a timestamp for when the message is sent
            };

            // Add the message to sender's and receiver's messages array
            senderUser.messages.push(message);
            receiverUser.messages.push(message);

            // Update sender and receiver in the database
            await UserModel.UpdateUser(senderUser);
            await UserModel.UpdateUser(receiverUser);

            return "Message sent successfully!";
        } catch (error) {
            throw error;
        }
    }
    //?????
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

    static async SearchUsers(query) {
        // Implement a search mechanism based on your application's requirements
        const results = await new DB().FindAll("users", { $text: { $search: query } });

        return results;
    }



}




module.exports = UserModel;