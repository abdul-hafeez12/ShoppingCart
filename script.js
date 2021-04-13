function add() {
    var elem=add.caller.arguments[0].target.parentElement.parentElement;
    add.caller.arguments[0].target.parentElement.getElementsByClassName('card-notify-year2')[0].classList.remove('invisible');
      var price=elem.getElementsByClassName('card-detail-badge')[0].innerText;
      var title=elem.getElementsByClassName('product-name')[0].innerText;
      var imgsrc=add.caller.arguments[0].target.parentElement.getElementsByClassName('imagediv')[0].src;
        addItemToCart(title, price,imgsrc)
     }

  function removeitem(){
      let cartItems= document.getElementById("list");
      let finalprice=cartItems.getElementsByClassName('tpt')[0];
      var itemQty = cartItems.getElementsByClassName('qty')[0];
      if (parseFloat(itemQty.innerText) > 0){
            itemQty.innerText= ""+ (parseFloat(itemQty.innerText) - 1);
            finalprice.innerText= "$" + (parseFloat(itemQty.innerText)*(parseFloat(price.replace('$',''))));
            updateTotalPrice();
      }
     }
function addItemToCart(title, price, imgsrc) {
        var cartRow = document.createElement('tr')
        let cartItems= document.getElementById("list");
        let total= parseFloat(price.replace('$', ''));
        let finalprice=cartItems.getElementsByClassName('tpt')[0];
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
        var itemQty = cartItems.getElementsByClassName('qty')[0];
        for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText === title) {
              itemQty.innerText= ""+ (parseFloat(itemQty.innerText) + 1);
              finalprice.innerText= "$" + (parseFloat(itemQty.innerText)*(parseFloat(price.replace('$',''))));
              updateTotalPrice();
                return
            }
        }
        var cartRowContents = `
               <td class="col-sm-6 col-md-3">
                          <div class="media">
                           <img class="media-object"src=${imgsrc} style="width: 72px; height: 72px;"> 
                            <p class="cart-item-title">${title}</p>
                              </div>
                          </div>
                        </td>
                          <td class="col-sm-3 col-md-3" style="text-align: center">
                          <span class="qty">1</span>
                          <span class="d-inline-block minus" onclick='DQty();'>-</span>
                          <span class="d-inline-block plus" onclick='IQty();'>+</span>
                          <span class="d-inline-block delete"onclick='Dlete();'><i class="far fa-trash-alt"></i></span> 
                          </td>
                          <td class="col-sm-2 col-md-2 text-center price"><strong>${price}</strong></td>
                          <td class="col-sm-2 col-md-2 text-center tpt" ><strong>${total}</strong></td>
                          <td class="col-sm-1 col-md-1"> 
        `
        cartRow.innerHTML = cartRowContents  
         cartItems.append(cartRow)
         updateTotalPrice()
    }
    
    function IQty(){
         var a=IQty.caller.arguments[0].target.parentElement.getElementsByClassName('qty')[0];
         var b=IQty.caller.arguments[0].target.parentElement.parentElement;
         let price=b.getElementsByClassName('price')[0].innerText;
         let totalprice=b.getElementsByClassName('tpt')[0];

        a.innerText= ""+ (parseFloat(a.innerText) + 1);
        totalprice.innerText= "$" + (parseFloat(a.innerText)*(parseFloat(price.replace('$',''))));
        updateTotalPrice();   
    }
function updateTotalPrice(){
            let Final_total=0;
            let cartItems= document.getElementsByClassName('tpt');
            for (let i = 0; i < cartItems.length; i++) {
               Final_total+= parseFloat(cartItems[i].innerText.replace('$',''));
                
            }
            document.getElementsByClassName('final')[0].innerText= '$'+ Final_total;
        
            document.getElementsByClassName('final')[1].innerText= '$'+ Final_total;
        }

        function DQty(){
          var a=DQty.caller.arguments[0].target.parentElement.getElementsByClassName('qty')[0];
          var b=DQty.caller.arguments[0].target.parentElement.parentElement;
          let price=b.getElementsByClassName('price')[0].innerText;
          let totalprice=b.getElementsByClassName('tpt')[0];
 
          if(parseFloat(a.innerText) > 0){ 
         a.innerText= ""+ (parseFloat(a.innerText) - 1);
         totalprice.innerText= "$" + (parseFloat(a.innerText)*(parseFloat(price.replace('$',''))));
         updateTotalPrice();   
     }
    }
     function Dlete(){
      let row= Dlete.caller.arguments[0].target.parentElement.parentElement.parentElement;
      row.remove();
      updateTotalPrice();
  }
 