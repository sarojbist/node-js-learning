const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Teachers'; 

// Define an async function to handle the connection
async function connectToDatabase() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database');
    } catch (err) {
        console.error('Failed to connect to database', err);
    }
}
// Call the async function to establish the connection
connectToDatabase();

// creating schema
const teacher = new mongoose.Schema({
    name: String,
    present: Boolean
})

// creating model
const Student = new mongoose.model("Teacher", teacher)

// sending data
const adder = async () => {
    const ss = new Student({
        name: "Saroj",
        present: true
    })
    await ss.save()
}
adder();

// As soon as I run this, data given above will be sent to our database.