





//Changing pillow color//
    function changecolor() {

      var pillow = document.getElementById('pillow');
      var ColorSelect = document.getElementById('ColorSelect');

        pillow.src = ColorSelect.children[ColorSelect.selectedIndex].getAttribute('url');
    }



/*Changing price*/
    function changeprice(){

/*elements*/
      var str_origprice = document.getElementById('origprice');
      var str_price = document.getElementById('price');


/*numbers*/
      var origprice = 71.00
      var price = 34.00;


      var quantity =  document.getElementById('QuantitySelect').value;

      var totalorigprice = origprice * quantity;
      var totalprice = price * quantity;

      console.log(totalorigprice);


/*changing original page*/
      str_origprice.innerHTML = totalorigprice.toFixed(2);
      str_price.innerHTML = totalprice.toFixed(2);


/*document.getElementById('price') *  document.getElementById('QuantitySelect');*/

    }

    function addtocart(){

      var e = document.getElementById('fill');
      var f = document.getElementById('ColorSelect');

      var cartItem = {
        productName: "Couch Pillow (Very Fancy)",
        fill: e.options[e.selectedIndex].text,
        color: f.options[f.selectedIndex].text,
        quantity: document.getElementById('QuantitySelect').value,
      }

      console.log(cartItem);

      /*cartcreation*/
      //check if created -- this is how you access the cart in local//
            //how to fetch from cart//
      var cart = JSON.parse(localStorage.getItem("cart")) || [];

      console.log(cart);

      cart.push(cartItem);

      console.log(cart);

      localStorage.setItem("cart", JSON.stringify(cart));


      console.log(JSON.parse(localStorage.getItem("cart")));

      window.location.href="shoppingcartpage.html"


    }

    function getitemsincart(){

      var cart = JSON.parse(localStorage.getItem("cart")) || [];



      if (cart.length == 0)
        {
          document.getElementById("NoItems").css("visibility", "visible");
        }
      else{
        // put all the code inside cartrow (or biggest div) and appendchild to parent
        for(var i=0; i< list.length; i++){
          $("#cartlist").prepend(JSON.parse(localStorage.getItem("cart"))[0]+"");}
          console.log("cartlist")
      }

      }

    function cartchangeprice(){

  /*elements*/
      var str_price = document.getElementById('cartprice');
      var str_outthedoorprice = document.getElementById('outthedoorprice');
      var str_fee = document.getElementById('fee');

      var cartQuantitySelect =  document.getElementById('cartQuantitySelect').value;

  /*numbers*/

      var fee = Number(10)
      var price = Number(str_price)


      var totalprice = price * cartquantity + fee;

  /*changing original page*/
      str_price.innerHTML = totalprice;
      str_outthedoorprice.innerHTML = totalprice;


/*document.getElementById('price') *  document.getElementById('QuantitySelect');*/

    }








