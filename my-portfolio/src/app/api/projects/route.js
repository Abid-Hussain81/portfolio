import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({ featured: true }).sort({ createdAt: -1 });
    return Response.json(projects);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const project = await Project.create(data);
    return Response.json(project, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Failed to create project' }, { status: 500 });
  }
}