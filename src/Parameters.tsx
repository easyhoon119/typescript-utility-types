function ParameterExamFunc1(a: string, b: number) {
    return {
        a,
        b,
    };
}

declare function ParameterExamFunc2(arg: { c: number }): void;

type ParameterExamType1 = Parameters<() => string>;
type ParameterExamType2 = Parameters<typeof ParameterExamFunc2>;
type ParameterExamType3 = Parameters<typeof ParameterExamFunc1>;

function Parameters() {
    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default Parameters;
