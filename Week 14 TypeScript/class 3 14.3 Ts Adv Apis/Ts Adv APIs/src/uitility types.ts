interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>  //PICK
  
type UpdatePropsOptional = Partial<UpdateProps>  //PARTIAL

function UpdateUser(props:UpdateProps) {
    
}

interface admin {
    readonly name: string,
    readonly age: number
}

//to prevent repeating readonly => put Readonly<admin> while creating obj

const admin1:Readonly<admin> = {
    name: "Shivam",
    age: 21
}

// admin1.age = 22;

console.log(admin1)