import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request) {
  try {
    await dbConnect();
    const { name, email, message } = await request.json();
    
    if (!name || !email || !message) {
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    const contact = await Contact.create({ name, email, message });
    return Response.json({ message: 'Message sent successfully' }, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const messages = await Contact.find({}).sort({ createdAt: -1 });
    return Response.json(messages);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}