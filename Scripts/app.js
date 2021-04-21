const cartList = document.getElementById("cartList");
const Album_1 = document.getElementById("Album 1");
const Album_2 = document.getElementById("Album 2");
const Album_3 = document.getElementById("Album 3");
const Album_4 = document.getElementById("Album 4");

const albums = [
  { name: "Album 1", price: 12.99, inCart: false },
  { name: "Album 2", price: 14.99, inCart: false },
  { name: "Album 3", price: 9.99, inCart: false },
  { name: "Album 4", price: 19.99, inCart: false }
];

// const imgs = document.getElementsByTagName('img');

document.addEventListener('click', function (event) {
    if ( event.target ==  Album_1) {
        if (albums[0].inCart) {
            alert("Album already in cart.")
        }else{
            addToCart(1);
        }
    }
    else if ( event.target ==  Album_2) {
        if (albums[1].inCart) {
            alert("Album already in cart.")
        }else{
            addToCart(2);
        }
    }
    else if ( event.target ==  Album_3) {
        if (albums[2].inCart) {
            alert("Album already in cart.")
        }else{
            addToCart(3);
        }
    }
    else if ( event.target ==  Album_4) {
        if (albums[3].inCart) {
            alert("Album already in cart.")
        }else{
            addToCart(4);
        }
    }
}, false);

function updateImgSrc(){
    document.getElementById("Album 1").src = "Images/Album1.png";
    document.getElementById("Album 2").src = "Images/Album2.png";
    document.getElementById("Album 3").src = "Images/Album3.png";
    document.getElementById("Album 4").src = "Images/Album4.png";
}

function addToCart(albumId){
    albumIdx = albumId - 1;
    albums[albumIdx].inCart = true;

    cartList.innerHTML += `
        <div class="cart-item" id="${albumId}">
        <div>
            <img class="cart-item-image" alt="Cart Item Image" src = "Images/Album${albumId}.png">
            ${albums[albumIdx].name}
            $ ${albums[albumIdx].price} </div>
        </div>
        `;

}

updateImgSrc()
