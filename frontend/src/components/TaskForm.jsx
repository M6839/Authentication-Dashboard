// import { useEffect, useState } from 'react';
// import Button from './Button';
// import Input from './Input';

// export default function TaskForm({ onSubmit, initialData, onCancel }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

  
//   useEffect(() => {
//     if (initialData) {
//       setTitle(initialData.title || '');
//       setDescription(initialData.description || '');
//     } else {
//       setTitle('');
//       setDescription('');
//     }
//   }, [initialData]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ title, description });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-3">
//       <Input
//         label="Title"
//         placeholder="Task title"
//         value={title}
//         required
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <Input
//         label="Description"
//         placeholder="Task description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />

//       <div className="flex gap-2">
//         <Button>
//           {initialData ? 'Update Task' : 'Add Task'}
//         </Button>

//         {initialData && (
//           <Button
//             variant="outline"
//             onClick={onCancel}
//           >
//             Cancel
//           </Button>
//         )}
//       </div>
//     </form>
//   );
// }
import { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';

export default function TaskForm({ onSubmit, initialData, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setDescription(initialData.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [initialData]);

 
  const handleSubmit = async (e) => {
  e.preventDefault();

  const success = await onSubmit({ title, description });

  if (success && !initialData) {
    setTitle('');
    setDescription('');
  }
};


  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        label="Title"
        placeholder="Task title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        label="Description"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex gap-2">
        <Button>
          {initialData ? 'Update Task' : 'Add Task'}
        </Button>

        {initialData && (
          <Button
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
