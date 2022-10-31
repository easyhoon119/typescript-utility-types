// interface ExcludedExam {
//     name: string;
//     email: string;
//     country: string;
// }

type ExcludedExam = string | boolean | (() => void);

type keys = boolean;

type ExcludedType = Exclude<ExcludedExam, keys>;

function Excluded() {
    const exam1: ExcludedType = "hihi";

    const exam2: ExcludedType = () => {
        console.log("hihi");
    };

    // const exam3: ExcludedType = true;

    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default Excluded;
