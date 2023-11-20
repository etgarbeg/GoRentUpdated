
const { MongoClient, ObjectId } = require('mongodb');


class DB {
    db_uri;
    db_name;
    client;

    constructor() {
        this.db_uri = process.env.DB_URI;
        this.db_name = process.env.DB_NAME;
        this.client = new MongoClient(this.db_uri);
    }

    async FindAll(collection, query = {}, options = {}) {
        try {
            await this.client.connect();
            return await this.client.db(this.db_name).collection(collection).find(query, options).toArray();
        } catch (error) {
            throw error;
        }
        finally {
            await this.client.close();
        }
    }

    async FindById(collection, id, options = {}) {
        try {
            await this.client.connect();
            return await this.client.db(this.db_name).collection(collection).findOne({ _id: new ObjectId(id) }, options);
        } catch (error) {
            throw error;
        } finally {
            await this.client.close();
        }
    }


    async FindOne(collection, query = {}, options = {}) {
        try {
            await this.client.connect();
            return await this.client.db(this.db_name).collection(collection).findOne(query, options);
        } catch (error) {
            throw error;
        }
        finally {
            await this.client.close();
        }
    }

    async Insert(collection, doc) {
        try {
            await this.client.connect();
            return await this.client.db(this.db_name).collection(collection).insertOne(doc);
        } catch (error) {
            throw error;
        }
        finally {
            await this.client.close();
        }
    }

    async UpdateById(collection, id, doc) {
        try {
            await this.client.connect();
            console.log({ ...doc });
            return await this.client.db(this.db_name).collection(collection).updateOne(
                { _id: new ObjectId(id) },
                { $set: { ...doc } });
        } catch (error) {
            throw error;
        }
        finally {
            await this.client.close();
        }
    }

}

module.exports = DB;