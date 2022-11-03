function ReturnTypeExamFunc1(a: string, b: number) {
    return {
        a,
        b,
    };
}

declare function ReturnTypeExamFunc2(arg: { c: number }): void;

type exam1 = ReturnType<typeof ReturnTypeExamFunc1>;
// type exam1 = { a : string; b : number }
type exam2 = ReturnType<typeof ReturnTypeExamFunc2>;
// type exam2 = void

function ReturnType() {
    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default ReturnType;
