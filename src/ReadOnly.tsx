interface ReadOnlyExam {
    name: string;
    email: string;
}

function ReadOnly() {
    const exam1: Readonly<ReadOnlyExam> = {
        name: "jihoon",
        email: "jihoon@naver.com",
    };

    // exam1.name = 'jay';

    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default ReadOnly;
