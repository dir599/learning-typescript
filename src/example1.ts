interface User {
    id: number;
    name: string;
    email: string;
}

interface Author extends User {
    posts: number;
}

interface Admin extends User {
    permissions: string[];
}

const author: Author = {
    id: 1,
    name: "Dirag",
    email: "dirag@example.com",
    posts: 15
};

const admin: Admin = {
    id: 2,
    name: "Sanaj",
    email: "sanaj@example.com",
    permissions: ["delete_user", "delete_post"]
};

function showAuthor(author: Author) {
    return `Author: ${author.name}, Email: ${author.email}, Posts: ${author.posts}`;
}

function showAdmin(admin: Admin) {
    return `Admin: ${admin.name}, Email: ${admin.email}, Permissions: ${admin.permissions.join(", ")}`;
}

console.log(showAuthor(author));
console.log(showAdmin(admin));