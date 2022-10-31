type ExtractExam = string | boolean | (() => void);

type keys = boolean | Function | number;

type ExtractType = Extract<ExtractExam, keys>;

function Extract() {
    const exam1: ExtractType = () => {
        console.log("hihi");
    };

    const exam2: ExtractType = true;

    // const exam3: ExtractType = "jihoon";

    // const exam4: ExtractType = 4;

    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default Extract;
