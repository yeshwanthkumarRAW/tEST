    document.addEventListener("DOMContentLoaded", function(){

        let url = "https://fakestoreapi.com/products";  
        let grid = document.getElementById("row-col");
        let button = document.getElementById("btn");
        let startIndex = 0;
        let itemsInPage = 6;

        function fetchImages(){
            let options =  {
                method: "GET"
            }

            fetch(url, options)
            .then((response)=>{
                return response.json();
            }).then((data)=>{

                for(let i = startIndex; i < startIndex+itemsInPage; i++){

                    if( i < data.length){
                        let item = data[i];


                        let productDiv = document.createElement("div");
                        productDiv.classList.add("product");

                        let image1 = document.createElement("img");
                        image1.classList.add("imageOne");

                        image1.src = item.image;

                        productDiv.appendChild(image1)
                        grid.appendChild(productDiv)
                        

                    }else{
                        button.style.display = "none";
                        break;
                    }

                }
                startIndex += itemsInPage;


            })

        }
        button.addEventListener("click", fetchImages);

        fetchImages();

    });