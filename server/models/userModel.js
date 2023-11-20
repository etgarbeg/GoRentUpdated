const DB = require('../utils/db');
class UserModel {




    _id;
    username;
    password;
    email;
    adress;
    creditCard;
    products;
    requested;


    constructor(username, password, email, adress, creditCard, products) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.adress = adress;
        this.creditCard = creditCard;
        this.products = products;
        this.requested = null;//creating new user, no request yet
    }
    //functions 

    static async Register(id, username, password, firstName, lastName, email, adress, creditCard, products, image)//all props of register
    {

        let user = { id, username, password, firstName, lastName, email, adress, creditCard, products, image }

        return await new DB().Insert('users', user);
    }

    static async Login(email, password) {
        const user = await new DB().FindOne("users", { email: email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return null;
        }

        return { user };
    }



    static async requestProduct(user1, user2, product) {
        const productToRequest = { ...product, requester: user1.email };

        // Add product to user1's cart (assuming 'cart' is an array in the user's properties)
        user1.cart.push(productToRequest);

        // Add product to user2's requested items (assuming 'requested' is an array in the user's properties)
        user2.requested.push(productToRequest);

        // Save updated user data to the database
        await new DB().Update("users", { email: user1.email }, user1);
        await new DB().Update("users", { email: user2.email }, user2);

        return `${user1.email} requested ${product.productName} from ${user2.email}.`;
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