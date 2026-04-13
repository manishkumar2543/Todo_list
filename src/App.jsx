import Header from "./components/Header";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
    return (
        <div className="border-t-2 w-full min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            <Header />
            <Create />
            <Show />
        </div>
    );
};

export default App;
