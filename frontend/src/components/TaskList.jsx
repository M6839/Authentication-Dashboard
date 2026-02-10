import Button from "./Button";

export default function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  if (!tasks.length) {
    return (
      <p className="text-center text-slate-500 py-8">
        No tasks found 🚀
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="flex justify-between items-center bg-slate-50 border border-slate-200 rounded-lg p-4"
        >
          {/* Task Info */}
          <div>
            <h3
              className={`font-semibold text-slate-900 ${
                task.status === "completed"
                  ? "line-through text-slate-400"
                  : ""
              }`}
            >
              {task.title}
            </h3>
            {task.description && (
              <p className="text-sm text-slate-500">
                {task.description}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onToggle(task)}
            >
              {task.status === "pending" ? "Complete" : "Undo"}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(task)}
            >
              Edit
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(task._id)}
              className="text-red-500 border-red-300 hover:bg-red-50"
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
