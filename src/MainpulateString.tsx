type examString = "jihoon@Naver.com" | "sDsD" | "Jay";

type exam1 = Uppercase<examString>;
// type exam1 = "JIHOON@NAVER.COM" | "SDSD" | "JAY"
type exam2 = Lowercase<examString>;
// type exam2 = "jihoon@naver.com" | "sdsd" | "jay"
type exam3 = Capitalize<examString>;
// type exam3 = "Jihoon@Naver.com" | "SDsD" | "Jay"
type exam4 = Uncapitalize<examString>;
// type exam4 = "jihoon@Naver.com" | "sDsD" | "jay"

function ManipulateString() {
    return (
        <div className="App">
            <p>TypeScript Utility Types</p>
        </div>
    );
}

export default ManipulateString;
