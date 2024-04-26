
import { firebaseConfig } from '../../lib/firebase/config/firebaseConfig'; 

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { taskId } = req.body; // Or however you're identifying tasks

    try {
      await firebaseConfig.collection('tasks').doc(taskId).delete();
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end();
  }
}


import { toast } from 'react-toastify';
toast.success('Task deleted successfully!');

