// components/ContactForm.tsx
'use client'; // Add this if using Next.js App Router

import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/src/pages/api/contact.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
          <label htmlFor="name" className="block text-gray-300 text-sm mb-1">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 text-sm bg-gray-800/70 border border-gray-700/50 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 text-sm mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 text-sm bg-gray-800/70 border border-gray-700/50 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm mb-1">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-3 py-2 text-sm bg-gray-800/70 border border-gray-700/50 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm bg-blue-600/90 hover:bg-blue-600 rounded-md text-white font-medium transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/30"
        >
          Send Message
        </button>
    </form>
  );
};