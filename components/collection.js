var productcon=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productcon.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i++){
        var productname=productlist[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
            {
                productlist[i].style.display="none"

            }
            else
            {
                productlist[i].style.display="block"

            }

    }
})