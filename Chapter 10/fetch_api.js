// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(users => {
//         users.forEach(user => {
//             console.log(user.name, "-", user.email);
//             console.log(user.address.city, "-", user.address.street);
//         });
//     })
//     .catch(err => console.log("Something went wrong:", err));

async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error("Error:", err);
    }
}

getUsers();
