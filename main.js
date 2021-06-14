menu_list_array = ["Veg Margherita Pizza","Paneer","non veg"
                    ];

function getmenu(){
var htmldata=[];
var menu_Length=menu_list_array.length;
for(i=0;i<menu_Length;i++){
    menu_list_array.join(" ");
htmldata.push("<h4>Pizza</h4>"+"<h4>"+menu_list_array[i]+"</h4>"+"<br>");

document.getElementById("display_menu").innerHTML=htmldata;
}
//Complete the code
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
//Complete the code

}

function add_top(){
//Complete the code
}
function show_top(){
    var show_display=[];
    var menu_Length=menu_list_array.length;
    for(j=0;j<menu_Length;j++){
        menu_list_array.join(" ");
    show_display.push("<h4>Pizza</h4>"+"<h4>"+menu_list_array[j]+"</h4>"+"<br>");
    
    document.getElementById("display_addedmenu").innerHTML=show_display;
    }
    //Complete the code
    
    
}