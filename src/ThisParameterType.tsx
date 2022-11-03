function ThisParameterTypeFunc1(this: { name: string; age: number }) {
    return this;
}

type exam = ThisParameterType<typeof ThisParameterTypeFunc1>;
// type exam = { name : string; age : number }
const exma2 = ThisParameterTypeFunc1.bind({ name: "jihoon", age: 2222 });

function ThisParameterType() {
    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default ThisParameterType;
