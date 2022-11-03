class ExamClass {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

type exam = InstanceType<typeof ExamClass>;
// type exam = ExamClass
const exmaInstance: exam = new ExamClass("jihoon", "jihoon@gmail.com");

function InstanceType() {
    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default InstanceType;
