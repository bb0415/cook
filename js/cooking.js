let cardarr = []
let postnum = 0;
let post = 0;



function incard(){
        cardarr.push(`<div id = 'p${postnum}' class='card border-dark mb-3' style='display: none; max-width: 40rem; min-height: 30rem; position: relative; left: 1000px; top: 150px;'><input type='text' placeholder=' p${(postnum + 1)} : STEP' class='card-header' style = 'min-width: 40rem; border: 0px;' disabled></input><div class='card-body'><p class='card-text'><textarea
        id = "text${postnum}" vlaue = "" placeholder='text' style='border: 0px; width: 38rem; height: 30rem; font-size: 26px;'></textarea></p></div></div>`)
        post = postnum
        postnum++
}

function change_card(post){

    for(var i = 0; i < postnum; i++){
        document.getElementById(`p${i}`).style.display = "none"
    }
    document.getElementById(`p${post}`).style.display = "block"

}


function onover(num) {
    if(num == 1){
        document.getElementById("f-img").src = "./img/onfile.bmp"
    }
    else if(num == 2){
        document.getElementById("up").src = "./img/onup.png"
  
    }

    else if(num == 3){
        document.getElementById("down").src = "./img/ondown.png"
  
    }
}

function onout(num) {

    if(num == 1){
        document.getElementById("f-img").src = "./img/file.bmp"

    }
    else if(num == 2){
        document.getElementById("up").src = "./img/up.png"

    }
    else if(num == 3){
        document.getElementById("down").src = "./img/down.png"

    }
}

function bclick() {

    incard()
    document.getElementById("form1").innerHTML += cardarr[postnum]

    change_card(post)

    if(post > 0){
        document.getElementById("upbt").style.display = "block"
    }
}

function bb(){
    var textareaContent = document.getElementById(`text${post}`).value;
    console.log(textareaContent);
}

function down(){
    post += 1
    change_card(post)

    if(post + 1 == postnum){
        document.getElementById("cardbt").innerHTML = `<button onmouseover="onover(1)" onmouseout="onout(1)" onclick="bclick()"
            style="background-color: white; min-width: 40rem; border: 5px solid; border-radius: 20px; border-color: rgb(102, 167, 241); text-align: center; position: relative; left: 1000px; top: 150px;">
            <img id="f-img" src="./img/onfile.bmp" style="width: 50px;">
        </button>`
    }
    if(post != 0){
        document.getElementById("upbt").style.display = "block"
    }

}

function up(){
    post -= 1
    change_card(post)

    if(post > 0){
        document.getElementById("upbt").style.display = "block"
    }else if(post == 0){
        document.getElementById("upbt").style.display = "none"
    }

    document.getElementById("cardbt").innerHTML = `<button onmouseover="onover(3)" onmouseout="onout(3)" onclick="down()"style="background-color: white; min-width: 40rem; border: 5px solid; border-radius: 20px; border-color: rgb(102, 167, 241); text-align: center; position: relative; left: 1000px; top: 150px;"><img id="down" src="./img/down.png" style="width: 50px;"></button>`
}



