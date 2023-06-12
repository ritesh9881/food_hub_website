function submit(){
    alert("Your Recipe is Submitted Successfuly")
}

function rege(){
    alert("Your Registration is Done")
}
// function cart(){
//  confirm("Add to Cart");
//     if (confirm==ok){
//         c++;
//         document.getElementById("count").innerHTML=+c;
//     }
//     else{

//     }
    
// }

// if (localStorage.getItem('cart')) {
//     cart = JSON.parse(localStorage.getItem('cart'));
//     let item = cart.find(el => el.id === id);
//     if (!item) {
//       cart.push(itemToAdd);
//     }
// }

// Use find() function to extract the badge
    // count from '#group' container.
    // $(document).ready(function() {
    //     $(".imgFluid").click(function() {
    //         var val = parseInt($('#group').find('.badge').text());
 
    //         // Check for the button clicked
    //         if ($(this).hasClass('thumbnail')) {
    //             $('#group').find('.badge').text(val + 1);
    //         }
    //         //  else if ($(this).hasClass('thumbnail')) {
    //         //     $('#group').find('.badge').text(val + 1);
    //         // }
    //     });
    // });

    var c=0;
    function cart(){
        alert("Add to Cart"); 
        c++;
        document.getElementById("count").innerHTML=+c;
    }