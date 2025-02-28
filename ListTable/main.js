const listUsers = [
  { name: "Cuong", age: 25, indentityCode: 13, email: "lucuong@gmail.com" },
  { name: "Nguyễn văn a", age: 19, indentityCode: null, email: "lucuong@gmail.com" },
  { name: "Nguyễn văn B", age: 25, indentityCode: null, email: "lucuong@gmail.com" },
  { name: "Nguyễn văn C", age: 19, indentityCode: null , email: "lucuong@gmail.com" },
  { name: "Nguyễn văn D", age: 25, indentityCode: 13, email: "lucuong@gmail.com" },
  { name: " Nguyễn văn E", age: 19, indentityCode: 13, email: "lucuong@gmail.com" },
  { name: " Nguyễn văn F", age: 19, indentityCode: 13, email: "lucuong@gmail.com" },

];

listUsers.forEach((item) => {
    document.getElementById("list").innerHTML += `
    <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.indentityCode != null ? item.indentityCode : ''}</td>
        <td>${item.email}</td>
    </tr>
`;
});
listUsers.filter(item => item.age > 20).forEach((item) => {
    document.getElementById("userName").innerHTML += `
    <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.indentityCode != null ? item.indentityCode : ''}</td>
        <td>${item.email}</td>
    </tr>`;
})
listUsers.filter(item => item.indentityCode != null).forEach((item) => {
    document.getElementById("code").innerHTML += `
    <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.indentityCode}</td>
        <td>${item.email}</td>
    </tr>
`;
})