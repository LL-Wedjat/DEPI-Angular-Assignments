var products = [];

if (localStorage.getItem("products") !== null) {
    products = JSON.parse(localStorage.getItem("products"));
    disPro();
}

var proName = document.getElementById("proName");
var proPrice = document.getElementById("proPrice");
var proCategory = document.getElementById("proCategory");
var proDesc = document.getElementById("proDesc");
var btn = document.getElementById("btn");
var proSearch = document.getElementById("proSearch");
var currentIndex = -1;

btn.onclick = function() {
    var product = {
        name: proName.value,
        price: proPrice.value,
        category: proCategory.value,
        description: proDesc.value
    }
    
    if (currentIndex === -1) {
        products.push(product);
    } else {
        products[currentIndex] = product;
        currentIndex = -1;
        btn.innerHTML = "Add Product";
    }
    
    disPro();
    localStorage.setItem("products", JSON.stringify(products));
    clearForm();
};

function clearForm() {
    proName.value = "";
    proPrice.value = "";
    proCategory.value = "";
    proDesc.value = "";
}

function disPro(){
    var Allpro = ``;
    for (let i = 0; i < products.length; i++) {
        Allpro+=`<tr>
        <td>${i+1}</td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].description}</td>
        <td><button onclick="delPro(${i})" class="btn delete">Delete</button><button onclick="updatePro(${i})" class="btn update">Update</button></td>
    </tr>`
    }
    document.getElementById("tbody").innerHTML = Allpro;
}

function delPro(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    disPro();
}

proSearch.onkeyup = function() {
    searchPro(proSearch.value);
}

function searchPro(proName) {
    var Allpro = ``;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(proName.toLowerCase())) {
            Allpro+=`<tr>
            <td>${i+1}</td>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].category}</td>
            <td>${products[i].description}</td>
            <td><button onclick="delPro(${i})" class="btn delete">Delete</button><button onclick="updatePro(${i})" class="btn update">Update</button></td>
        </tr>`
        }
    }
    document.getElementById("tbody").innerHTML = Allpro;
}

function updatePro(index) {
    currentIndex = index;
    proName.value = products[index].name;
    proPrice.value = products[index].price;
    proCategory.value = products[index].category;
    proDesc.value = products[index].description;
    btn.innerHTML = "Update Product";
}