interface OmitExam {
    name: string;
    email: string;
    country: string;
}

type keys = "name";

function Omit() {
    const exam1: Omit<OmitExam, keys> = {
        country: "ko",
        email: "jihoon@naver.com",
    };

    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default Omit;
