const context = {
    users: null,
}

window.onload = async () => {
    await getUsers();
    renderUsers();
    salaryDisplay();
}

const getUsers = async () => {
    const usersAPI = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    const usersData = await usersAPI.json();
    context.users = usersData; 
    console.log(context.users);
}

// Bai 1
const renderUsers = () =>{
        let usersList = document.getElementById('users-List');
        context.users.forEach((user, index) => {
            let liUser = `<li id="user-${index}">${user.employee_name}</li>`
            usersList.innerHTML += liUser;
        })
}

// Bai 2
const salaryDisplay = () => {
    let usersSalary = document.getElementById('employee_salary');
    context.users.forEach((user, index) => {
        let eachUser = document.getElementById(`user-${index}`);
        // console.log(eachUser);
        eachUser.addEventListener('mouseover', () => {
            let display = `${user.employee_name}: ${user.employee_salary}`
            usersSalary.innerText = display;
        })
    })
}
