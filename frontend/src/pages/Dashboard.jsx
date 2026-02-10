
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import api from '../services/api';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      toast.error('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  
  const handleCreate = async (data) => {
  try {
    await api.post('/tasks', data);
    toast.success("Task added successfully");
    fetchTasks();
    return true; 
  } catch (err) {
    toast.error(err.response?.data?.message || "Failed to add task");
    return false;
  }
};


  const handleUpdate = async (data) => {
    try {
      await api.put(`/tasks/${editingTask._id}`, data);
      toast.success('Task updated successfully');
      setEditingTask(null);
      fetchTasks();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update task');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      toast.success('Task deleted successfully');
      fetchTasks();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to delete task');
    }
  };

  const handleToggleStatus = async (task) => {
    try {
      await api.put(`/tasks/${task._id}`, {
        status: task.status === 'pending' ? 'completed' : 'pending',
      });
      fetchTasks();
    } catch (err) {
      toast.error('Failed to update task status');
    }
  };

  const filteredTasks = tasks.filter((t) =>
    filter === 'all' ? true : t.status === filter
  );



  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-3xl mx-auto px-4 space-y-6">

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">
            Welcome, {user?.name}
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage your tasks efficiently
          </p>
        </div>

       
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-slate-800 mb-4">
            {editingTask ? 'Edit Task' : 'Create New Task'}
          </h2>
          <TaskForm
            onSubmit={editingTask ? handleUpdate : handleCreate}
            initialData={editingTask}
            onCancel={() => setEditingTask(null)}
          />
        </div>

       
        <div className="flex gap-2">
          {['all', 'pending', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-1.5 rounded-lg text-sm border transition
                ${
                  filter === status
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

       
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
         {loading ? (
        <p className="text-center text-slate-500">Loading tasks...</p>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onEdit={setEditingTask}
          onDelete={handleDelete}
          onToggle={handleToggleStatus}
        />
      )}
        </div>
      </div>
    </div>
  );
}
