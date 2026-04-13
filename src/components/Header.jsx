import { useContext } from "react";
import { todocontext } from "../Context/Context";

const Header = () => {
    const [tasks] = useContext(todocontext);

    return (
        <div className="mt-4 md:mt-[7%] w-full max-w-sm md:max-w-md lg:max-w-lg border rounded-3xl flex flex-col md:flex-row justify-center md:justify-around items-center p-10 md:p-0">
            <div className="text-yellow-100 text-center md:text-left mb-4 md:mb-0">
                <h1 className="text-xl md:text-3xl font-bold">LETS TODO</h1>
                <p className="text-sm md:text-base">Keeps doing things</p>
            </div>
            <div className="text-xl md:text-3xl font-extrabold flex justify-center items-center w-11 h-11 md:w-20 md:h-20 rounded-full bg-orange-600">
                {tasks.filter((t) => t.completed === true).length}/
                {tasks.length}
            </div>
        </div>
    );
};

export default Header;
