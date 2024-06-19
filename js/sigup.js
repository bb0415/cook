function check_pw(){
    if(sigup.u_pw.value !== sigup.u_repw.value){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        return false;
        }
        else{
        return true;
    }
}