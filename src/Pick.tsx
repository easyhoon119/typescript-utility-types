interface PickExam {
    name: string;
    email: string;
    country: string;
}

type keys = "name" | "country";

function Pick() {
    const exam1: Pick<PickExam, keys> = {
        name: "jihoon",
        country: "ko",
    };

    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default Pick;
