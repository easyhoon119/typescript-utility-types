type NonNullableExam =
    | string
    | boolean
    | (() => void)
    | undefined
    | { name: string; email: undefined };

type NonNullableType = NonNullable<NonNullableExam>;

function NonNullable() {
    const exam1: NonNullableType = "jihoon";

    const exam2: NonNullableType = true;

    const exam3: NonNullableType = () => {
        console.log("hihi");
    };

    // const exam4 : NonNullableType = undefined;

    const exam5: NonNullableType = {
        name: "jay",
        email: undefined,
    };

    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default NonNullable;
