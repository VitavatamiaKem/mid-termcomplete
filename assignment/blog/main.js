var OnMouse = 1;
function postFunction() {

    var Input = document.getElementById("text1").value;
    if (OnMouse == 1){
        var post = document.getElementById("post1");
        post.innerHTML = Input;

    }
    else if (OnMouse == 2){
        var reply1 = document.getElementById("reply1");
        reply1.innerHTML = Input;
        
    }
    else if (OnMouse == 3){
        var reply2 = document.getElementById("reply2");
        reply2.innerHTML = Input;
        
    }
    OnMouse += 1;

}
function clearFunction(){
   
    OnMouse = 1;

    var post = document.getElementById("post1");
    post.innerHTML = "";

    var reply1 = document.getElementById("reply1");
    reply1.innerHTML = "";

    var reply2 = document.getElementById("reply2");
    reply2.innerHTML = "";

}