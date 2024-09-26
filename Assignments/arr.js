//.find

const users = [
    { username: 'Shivam2', password: '123' },
    { username: 'Mallika2', password: '1234' },
    { username: 'Abhinav2', password: '1235' }
  ];

function add(){
    users.push({
        username:"Shivam",
        password:"123"
    })
    users.push({
        username:"Mallika",
        password:"1234"
    })
    users.push({
        username:"Abhinav",
        password:"1235"
    })
}



add();

const findUser = users.find(user => user.username == "Mallika" && user.password == "1234");



console.log(users);
console.log(findUser);