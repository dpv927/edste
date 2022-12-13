function setColor(members, color){
    for(let index = 0 ; index < members.length ; ++index)
        members[index].style.color  = "#" + color;
}

function init_input(input_number, target_id){
    var typed_color = document.querySelector("#input_" + input_number).value;
    var sources = document.querySelectorAll("#" + target_id);
    setColor(sources,typed_color);
}

function init_foreground(){
    var color = document.querySelector("#input_29").value;
    document.querySelector("div").style.color = "#" + color;
}

function init_backround(){
    var color = document.querySelector("#input_30").value;
    document.querySelector("div").style.background = "#" + color;
}