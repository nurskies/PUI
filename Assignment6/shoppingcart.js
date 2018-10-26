window.onload = function(){
        var cart = JSON.parse(localStorage.getItem("cart")) || [];
        var totalprice = 0;

//if no items in cart display this//
        if (cart.length == 0){
            document.getElementById("no-items").style.display = "block";
        }//otherwise//
        else{
            totalprice = 0;
            for (var i = 0; i < cart.length; i++){
                var cartRow = document.createElement("div");

                var att = document.createAttribute("class");       // Create a "class" attribute
                att.value = "cart-row";
                cartRow.setAttributeNode(att);

                var remove = document.createElement("button");
                remove.innerText = "REMOVE";
                remove.addEventListener("click", function(i) {
                    totalprice -= 34;
                    this.parentNode.remove();

                    var totalPriceText = document.getElementById('totalprice');
                    totalPriceText.innerHTML = 'Total: $' + totalprice + '.00';

                    cart.splice(i, 1);
                    localStorage.setItem("cart", JSON.stringify(cart));
                });
                cartRow.appendChild(remove);

                //product name//
                var prodName = document.createElement("p");
                prodName.innerHTML = cart[i].productName;
                cartRow.appendChild(prodName);

                var title = document.createAttribute("class");
                title.value = "cart-row-title";
                prodName.setAttributeNode(title);

                //fill name//
                var fillName = document.createElement("p");
                fillName.innerHTML = cart[i].fill;

                var space = document.createAttribute("class");
                space.value = "cart-row-fill";
                fillName.setAttributeNode(space);
                cartRow.appendChild(fillName);

                //color//
                var color = document.createElement("p");
                color.innerHTML = cart[i].color;
                var space = document.createAttribute("class");
                space.value = "cart-row-fill";
                fillName.setAttributeNode(space);
                cartRow.appendChild(color);

                document.getElementById("cartlist").appendChild(cartRow);

                var quantity = document.createTextNode(cart[i].quantity);
                console.log(quantity);

                cartRow.appendChild(quantity);


                totalprice += 34*Number(cart[i].quantity);

            }

            var total = document.getElementById("totalprice");
            total.innerHTML = "Total: $" + totalprice + ".00";



//To empty cart//

//localStorage.setItem("cart", JSON.stringify([]));//

        }


}