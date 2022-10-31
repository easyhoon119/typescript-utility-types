interface RecordExam {
    name: string;
    email: string;
}

type keys = "kor" | "us" | "uk";

function ReadOnly() {
    const exam1: Record<keys, RecordExam> = {
        kor: {
            name: "지훈",
            email: "지훈@naver.com",
        },
        us: {
            name: "jay",
            email: "jay@google.com",
        },
        uk: {
            name: "kevin",
            email: "kevin@fb.com",
        },
    };

    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default ReadOnly;
