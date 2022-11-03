class ExamClass {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

type exam1 = ConstructorParameters<typeof ExamClass>;
//type exam1 = [name: string, email: string]

function ConstructorParameters() {
    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default ConstructorParameters;
