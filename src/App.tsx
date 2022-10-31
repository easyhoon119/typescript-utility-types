interface PatialExam {
    name: string;
    email: string;
}

function App() {
    const exam1: Partial<PatialExam> = {
        name: "jihoon",
    };

    const exam2: Partial<PatialExam> = {
        email: "jihoon@gamil.com",
    };

    // const exam3 : Partial<PatialExam> = {
    //   language : 'typescript'
    // }

    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default App;
