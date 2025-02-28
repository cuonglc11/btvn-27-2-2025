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
load(listProduct);
function  addProduct() {
    const listProductAdd = [];
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
     if(productName && productPrice) {
        const product  = {
            name: productName,
            price: parseInt(productPrice)
        }
        listProductAdd.push(product);
        load(listProductAdd);
        return;
     }
     alert("Vui điền đầy đủ thông tin")
}
function load(listProduct) {
    listProduct.forEach((item) => {
        document.getElementById("listProduct").innerHTML += `
          <tr>
            <td>${item.name}</td>
            <td>${item.price} đ</td>
          </tr>
        `
    });
}