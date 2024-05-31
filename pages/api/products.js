
import { connectToDatabase } from '../../lib/mongodb';//db connection to api endpoint

export default async function handler(req, res) {
  const { method } = req; 

  switch (method) { //swtich case statement that defines a GET method that gets the data from the databse
    case 'GET':
      try {
        const { client, db } = await connectToDatabase();
        const products = await db.collection('product').find({}).toArray(); //take the product collection, find all its data and convert it to array

        res.status(200).json(products);//send the products value as response
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}