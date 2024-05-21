import "./App.css";

function App() {
    return (
        <>
            <h1 className="bg-red-400 text-9xl rounded-md">Test</h1>
            <label className="text-primary" htmlFor="fname">
                First name:
            </label>
            <input
                className="border-solid border-8 border-indigo-700"
                type="text"
                id="fname"
                name="fname"
            ></input>
        </>
    );
}

export default App;
