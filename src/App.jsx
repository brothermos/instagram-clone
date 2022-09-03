import "./App.css";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Toggle from "./components/Toggle";
import Userinfo from "./components/Userinfo";
import UserPosts from "./components/UserPosts";

function App() {
    return (
        <>
            <Navbar />
            <div className="w-full md:w-[60rem] lg:w-[60rem] mx-auto">
                <Userinfo />
                <Story/>
                <Toggle/>
                <UserPosts/>
            </div>
        </>
    );
}

export default App;
