

const pr = fetch("https://dummyjson.com/products");


pr.then((res)=>{
    
    const pr2 = res.json(); 
    pr2.then((data)=>{
        // console.log(data);
        createUI(data);
    })
}).catch((err)=>{
    console.log("Error Occured", err)
})


const main = document.getElementById("root");
function createUI(data){
    const products = data.products; 

    // const root = document.getElementById("root");
    // console.log(products);

    main.innerHTML = "";

    for(let i=0; i<products.length; i++){
        const newCard = document.createElement("div");

        // const title = document.createElement("h3");
        // title.innerText = products[i].title;
        // newCard.appendChild(title);

        // const img = document.createElement("img");
        // img.src = products[i].thumbnail;
        // newCard.appendChild(img);

        // const price = document.createElement("p");
        // price.innerText = products[i].price;
        // newCard.appendChild(price);

        //  OR

        newCard.innerHTML = `
        <h3>${products[i].title}</h3>
        <div class="img-container"><img src="${products[i].thumbnail}"></div>
        <p>Price: $ ${products[i].price}</p>
        `

        main.appendChild(newCard);
    }

    if(products.length == 0){
        const noCard = document.createElement("div");
        noCard.innerHTML = "No Products Found";
        main.appendChild(noCard);
    }




}


function searchProducts(e){
    const value = e.target.value;
    // console.log(value);
    const pr = fetch(`https://dummyjson.com/products/search?q=${value}`)
    pr.then((res)=>{
        const pr2 = res.json();
        pr2.then((data)=>{
            createUI(data);
            // console.log(data);
        })
    }).catch((err)=>{
        console.log("Error Occured", err)
    })
}