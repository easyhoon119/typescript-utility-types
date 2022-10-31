interface RequiredExam {
    name?: string;
    email?: string;
}

function Required() {
    // const exam1 : Required<RequiredExam> = {
    //   name : 'jihoon'
    // }

    // const exam2 : Required<RequiredExam> = {
    //   email : "jihoon@gamil.com"
    // }

    const exam3: Required<RequiredExam> = {
        name: "jihoon",
        email: "jihoon@gamil.com",
    };

    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default Required;
