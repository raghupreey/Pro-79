menu_list_array = ["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
    
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
     htmldata=htmldata+"</ol>"
     document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="card">' +'<img src="https://b.zmtcdn.com/data/pictures/7/3800017/ba50a5176f9b3abf84a4b734543474a2.jpg">' + menu_list_array[i] + '</div>'
    }
      htmldata=htmldata+"</section>"
      document.getElementById("display_addedmenu").innerHTML = htmldata;
}