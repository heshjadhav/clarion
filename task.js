const users = [
    {
      name: "yagnesh",
      age: 30,
      gender: "male",
    },
    {
      name: "virat",
      age: 28,
      gender: "male",
    },
    {
      name: "rohit",
      age: 32,
      gender: "male",
    },
    {
      name: "dipika",
      age: 34,
      gender: "female",
    },
    {
      name: "alia",
      age: 19,
      gender: "female",
    },
    {
      name: "rekha",
      age: 64,
      gender: "female",
    },
    {
      name: "Taimur",
      age: 18,
      gender: "male",
    },
  ];

  //console.log(users);

  
// some using reduce
const isRekhaExists = users.reduce((acc,curr) => {
    if(curr.name == 'rekha'){
        acc = curr.name;
    }
    return !!acc;
},false);

console.log(isRekhaExists);

//every using reduce
const isEveryoneAdult = users.reduce((acc,curr) => {
    acc = false;
    if(curr.age >= 18){
        acc = true;
    }
    return !!acc;
},false);
  
console.log(isEveryoneAdult);


//find using reduce
const findData = users.reduce((acc,curr) => {
    if('alia' === curr.name){
        acc = curr;
    }
    return acc;
},{});

console.log(findData);

//map usinf reduce
updateGender = users.reduce((acc,curr)=>{
    if('female' === curr.gender){
        curr.gender = 'male';
    }
    acc.push(curr);
    return acc;
},[]);

console.log(updateGender);
