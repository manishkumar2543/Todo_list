import { useContext } from "react";
import { todocontext } from "../Context/Context";

const Show = () => {
    const [tasks, settasks] = useContext(todocontext);

    const DeleteHandler = (i) => {
        let isValid = false;
        if (!tasks[i].completed) {
            isValid = confirm("Do you really Want to delete this Task ?");
        }

        if (isValid || tasks[i].completed) {
            settasks(tasks.filter((task, index) => index !== i));
        }
    };

    const CompleteTaskToggle = (i) => {
        const copyTasks = [...tasks];
        copyTasks[i].completed = !tasks[i].completed;
        settasks(copyTasks);
    };

    const EditHandler = (i) => {
    const newTitle = prompt("Edit your task title:", tasks[i].title);

    // agar user cancel kar de ya empty chhod do
    if (!newTitle || newTitle.trim() === "") return;

    const copyTasks = [...tasks];
    copyTasks[i].title = newTitle.trim();
    settasks(copyTasks);
  };
    let tasksrender = (
        <h1 className="text-center text-orange-500 font-extrabold text-lg md:text-2xl">
            No pending Tasks...
        </h1>
    );
    if (tasks.length > 0) {
        tasksrender = tasks.map((task, index) => {
            return (
                <li
                    key={index}
                    className="mb-3 md:mb-5 flex flex-col md:flex-row justify-between items-start md:items-center border rounded-xl p-3 md:p-5"
                >
                    <div className="flex items-center mb-2 md:mb-0">
                        <div
                            onClick={() => CompleteTaskToggle(index)}
                            className={`${
                                task.completed ? "bg-green-500" : "border"
                            } mr-3 md:mr-4 rounded-full w-8 h-8 md:w-[30px] md:h-[30px] border-orange-600 cursor-pointer`}
                        ></div>
                        <h1
                            className={`${
                                task.completed && "line-through"
                            } text-lg md:text-2xl font-extrabold text-yellow-100 break-words`}
                        >
                            {task.title}
                        </h1>
                    </div>
                    <div className="flex gap-2 md:gap-3 text-lg md:text-2xl text-yellow-100">
                            <i
                                onClick={() => EditHandler(index)}
                                 className="ri-file-edit-line cursor-pointer"
                                      ></i>
                        <i
                            onClick={() => DeleteHandler(index)}
                            className="ri-delete-bin-3-line cursor-pointer"
                        ></i>
                    </div>
                </li>
            );
        });
    }
    return <ul className="list-none w-full max-w-sm md:max-w-md lg:max-w-lg">{tasksrender}</ul>;
};

export default Show;
