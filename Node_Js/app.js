const { MongoClient } = require('mongodb');

// Replace with your MongoDB connection string (Local or MongoDB Atlas)
const url = 'mongodb://localhost:27017/'; 
const client = new MongoClient(url);

// Database Name
const dbName = 'Employee';

async function main() {
    try {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Successfully connected to MongoDB server');
        
        const db = client.db(dbName);
        
        const emp = db.collection('emp');
        const allemp = await emp.findOne({}) ;
        console.log("All Employees:", allemp);

        const emp_updt = await emp.updateMany( { gender: "Genderfluid" }, { $set: { gender: "Female" } } ) ;
        console.log(emp_updt);

    } catch (error) {
        console.error('Connection failed:', error);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

main();