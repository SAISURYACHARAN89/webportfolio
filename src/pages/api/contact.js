export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    try {
      // Process your form data here (send email, save to DB, etc.)
      console.log('Form submission:', req.body);
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error('Form submission error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }