let savedIndex = -1;
let myBtn = document.querySelector("#myBtn")
students = []

function drawFunction (){
    document.querySelector("tbody").innerHTML = ''
    for(let i=0; i < students.length; i++){
        document.querySelector("tbody").innerHTML += `
        <tr>
        <td>${i+1}</td>
        <td>${students[i].firstName}</td>
        <td>${students[i].lastName}</td>
        <td>${students[i].company}</td>
        <td>${students[i].age}</td>
        <td>${students[i].region}</td>
        <td>
        <button onclick = "deleteStudent(${i})" class = "btn btn-sm btn-danger">delete</button>
        <button onclick = "editStudent(${i})" class = "btn btn-sm btn-warning">edit</button>
        </td>
        </tr>
        `
    }
}
drawFunction()

myBtn.addEventListener('click',addStudent)
function addStudent (){
    let firstName  = document.forms['myForm']['firstName'].value;
    let lastName  = document.forms['myForm']['lastName'].value;
    let company  = document.forms['myForm']['company'].value;
    let age  = document.forms['myForm']['age'].value;
    let region  = document.forms['myForm']['region'].value;
    if(firstName.trim().length>0 && lastName.trim().length>0 && company.trim().length>0 && age.trim().length>0 && region.trim().length>0){
        newObj = {
            firstName,
            lastName,
            company,
            age,
            region
        }
        if(savedIndex >= 0){
            students[savedIndex] = newObj
        }
        else{
            students.push(newObj)
        }
        drawFunction()
        document.forms['myForm'].reset()
        savedIndex = -1
    }
    else{
        alert("Formani to'liq to'ldiring ! ")
    }
}
function deleteStudent(index){
        students.splice(index,1)
        drawFunction()
}

function editStudent(index){
    document.forms['myForm']['firstName'].value = students [index].firstName;
    document.forms['myForm']['lastName'].value = students [index].lastName;
    document.forms['myForm']['company'].value = students [index].company;
    document.forms['myForm']['age'].value = students [index].age;
    document.forms['myForm']['region'].value = students [index].region;
    savedIndex = index

}