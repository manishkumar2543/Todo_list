import { useContext, useState } from "react";
import { todocontext } from "../Context/Context";

const Create = () => {
    const [tasks, settasks] = useContext(todocontext);

    const [title, settitle] = useState("");

    const TaskSubmitHandler = (e) => {
        e.preventDefault();
        settasks([...tasks, { title: title, completed: false }]);
        settitle("");
    };

    return (
        <form
            onSubmit={TaskSubmitHandler}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg flex flex-col md:flex-row items-center md:justify-between px-3 md:px-5 my-2 md:my-[2%]"
        >
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                placeholder="write your next task..."
                className="px-3 md:px-5 py-3 md:py-2 text-yellow-100 outline-none w-full md:w-[80%] rounded-xl bg-zinc-700 text-sm md:text-base"
                type="text"
            />
            <button className="outline-none text-2xl md:text-4xl font-extrabold flex justify-center items-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-orange-600 mt-2 md:mt-0">
                <i className="ri-add-fill"></i>
            </button>
        </form>
    );
};

export default Create;
