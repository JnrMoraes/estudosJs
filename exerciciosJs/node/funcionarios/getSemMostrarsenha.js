const student = {
    id: 1001,
    name: 'Alex',
    email: 'alex@email.com',
    password: 'alex@123'
};

// {"id":1001,"name":"Alex","email":"alex@email.com","password":"alex@123"}

const studentStr = JSON.stringify(student,(key,value) =>{
    if(key === 'password') return undefined;
      else return value; 

});

console.log(studentStr) // {"id":1001,"name":"Alex","email":"alex@email.com"}