import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Set this in your Vercel environment variables

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        try {
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();
            const database = client.db('mydatabase');
            const collection = database.collection('contacts');
            await collection.insertOne({ name, email, subject, message, date: new Date() });
            await client.close();

            return res.status(200).json({ message: 'Message saved successfully' });
        } catch (error) {
            console.error('Error saving message:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
