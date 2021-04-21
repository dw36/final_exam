const albums = [
  { name: "Album 1", price: 12.99, inCart: false },
  { name: "Album 2", price: 14.99, inCart: false },
  { name: "Album 3", price: 9.99, inCart: false },
  { name: "Album 4", price: 19.99, inCart: false }
];

// const imgs = document.getElementsByTagName('img');

function updateImgSrc(){
    document.getElementById("Album 1").src = "Images/Album1.png";
    document.getElementById("Album 2").src = "Images/Album2.png";
    document.getElementById("Album 3").src = "Images/Album3.png";
    document.getElementById("Album 4").src = "Images/Album4.png";
}



updateImgSrc()
