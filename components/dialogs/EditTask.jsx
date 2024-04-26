
import { firebaseConfig } from '../../lib/firebase/config/firebaseConfig'; 

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { taskId, updatedTaskData } = req.body; // Assuming you send the task ID and the new data

    try {
      await firebaseConfig.collection('tasks').doc(taskId).update(updatedTaskData);
      res.status(200).json({ message: 'Task updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end();
  }
}
