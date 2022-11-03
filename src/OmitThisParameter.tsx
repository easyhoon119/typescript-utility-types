function OmitThisParameterExamFunc1(this: { a: string; b: number }) {
    console.log(this.a, this.b);
    return this;
}

type exam1 = OmitThisParameter<typeof OmitThisParameterExamFunc1>;
// type exam1 = () => { a : string; b : number }

const logAandB: exam1 = OmitThisParameterExamFunc1.bind({ a: "hihi", b: 123 });
// 새로운 함수 제작
logAandB();
// 사용법 -> this parameter가 없어졌다!!

function OmitThisParameters() {
    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default OmitThisParameters;
