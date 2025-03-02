const listProduct = [
    {
        name: "LapTop",
        price: 1000
    },
    {
        name: "IPab",
        price: 1000
    },

]
load();
document.getElementById("formJob").addEventListener("submit",function(e) {
    e.preventDefault();
    const form  = new FormData(e.target);
    const product  = {
        name: form.get("productName"),
        price: parseInt(form.get("productPrice"))
    }
    listProduct.push(product);
    load();
})
function load() {
    document.getElementById("listProduct").innerHTML= '';
    listProduct.forEach((item) => {
        document.getElementById("listProduct").innerHTML += `
          <tr>
            <td>${item.name}</td>
            <td>${item.price} đ</td>
          </tr>
        `
    });
}