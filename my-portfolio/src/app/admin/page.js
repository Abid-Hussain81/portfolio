'use client';
import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/contact');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8">Loading messages...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Messages</h1>
        
        {messages.length === 0 ? (
          <p className="text-gray-600">No messages yet.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message._id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{message.name}</h3>
                    <p className="text-gray-600">{message.email}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(message.createdAt).toLocaleDateString()} at{' '}
                    {new Date(message.createdAt).toLocaleTimeString()}
                  </span>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="whitespace-pre-wrap">{message.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}