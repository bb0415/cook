
let cardarr = []
let postnum = 0;
let post = 0;
let cardvalue = []

function incard(){
        cardarr.push(`<div id = 'p${postnum}' class='card border-dark mb-3' style='display: none; max-width: 40rem; min-height: 30rem; position: relative; left: 1000px; top: 30px'><h3 class='card-header' id = "p${(postnum)}_STEP" style = 'min-width: 40rem; border: 0px;' > ${(post + 1)} / ${(postnum + 1)} </h3><div class='card-body'><p class='card-text'><textarea
        id = "text${postnum}" name = "text${postnum}" placeholder='text' style='border: 0px; width: 38rem; height: 30rem; font-size: 26px;'></textarea></p></div></div>`)


        post = postnum
        postnum++
        document.getElementById("post_num").value = postnum
}

function change_card(post){

    if(postnum > 1){
        for(var i = 0; i < postnum; i++){
            if(document.getElementById(`p${i}`).style.display != "none"){

                document.getElementById(`p${i}`).style.display = "none"
            }
        }
    }
    document.getElementById(`p${post}`).style.display = "block"

}



function onover(num) {
    if(num == 1){
        document.getElementById("f-img").src = "./img/onfile.bmp"
    }
    else if(num == 2){
        document.getElementById("up").src = "./img/onup1.png"
  
    }

    else if(num == 3){
        document.getElementById("down").src = "./img/onup1.png"
  
    }
}

function onout(num) {

    if(num == 1){
        document.getElementById("f-img").src = "./img/file.bmp"

    }
    else if(num == 2){
        document.getElementById("up").src = "./img/up1.png"

    }
    else if(num == 3){
        document.getElementById("down").src = "./img/up1.png"

    }
}

function bclick() {

    incard()

    document.getElementById("card_form").innerHTML += cardarr[postnum-1]
    
    if(postnum > 1){
        for(let i = 0; i < (postnum - 1); i++){
            document.getElementById(`text${i}`).innerHTML = cardvalue[i]
        }
    }

    if(postnum > 0){
        for(let i = 0; i < postnum; i++){
            cardvalue[i] = document.getElementById(`text${i}`).value;
        }
    }
    if(postnum > 0){
        for(var i = 0; i < postnum; i++){
            document.getElementById(`p${(i)}_STEP`).innerHTML = `${(i + 1)} / ${(postnum)}`
        }
    }

    change_card(post)

    if(post > 0){
        document.getElementById("upbt").style.display = "block";
    }
}

function bb(){
    var textareaContent = document.getElementById(`text${post}`).value;
    console.log(textareaContent);
}

function downcard(){
    post += 1
    change_card(post)

    if(post + 1 == postnum){
        document.getElementById("cardbt").innerHTML = `<button type="button" class="button btnPush btnLightBlue" onmouseover="onover(1)" onmouseout="onout(1)" onclick="bclick()"
            style="background-color: white; min-width: 40rem; border: 5px solid; border-radius: 20px; border-color: rgb(102, 167, 241); text-align: center; position: relative; left: 1000px;">
            <img id="f-img" src="./img/onfile.bmp" style="width: 50px;">
        </button>`
    }
    if(post != 0){
        document.getElementById("upbt").style.display = "block"
    }

}

function upcard(){
    post -= 1
    change_card(post)

    if(post > 0){
        document.getElementById("upbt").style.display = "block"
    }else if(post == 0){
        document.getElementById("upbt").style.display = "none"
    }

    document.getElementById("cardbt").innerHTML = `<button type="button" class="button btnPush btnLightBlue" onmouseover="onover(3)" onmouseout="onout(3)" onclick="downcard()"style="background-color: white; min-width: 40rem; border: 5px solid; border-radius: 20px; border-color: rgb(102, 167, 241); text-align: center; position: relative; left: 1000px;"><img id="down" src="./img/up1.png" style="transform: rotate(-90deg); width: 50px;"></button>`
}   

function hiding(){
    document.getElementById("tap").style.display = "none"
    document.getElementById("ontap").style.display = "block"

}

function unhiding(){

    document.getElementById("tap").style.display = "block"
    document.getElementById("ontap").style.display = "none"

}



window.addEventListener('beforeunload', (event) => {
    // 명세에 따라 preventDefault는 호출해야하며, 기본 동작을 방지합니다.
    event.preventDefault();

    // 대표적으로 Chrome에서는 returnValue 설정이 필요합니다.
    event.value = ''
});

var checkUnload = true;

var checkUnload = true;
$(window).on("beforeunload", function(){
    if(checkUnload) return '이 페이지를 벗어나면 작성된 내용은 저장되지 않습니다';
});

$("#form1").submit(function(){
    checkUnload = false;
});
