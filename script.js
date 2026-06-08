function showPage(page){

    document.querySelectorAll(".page").forEach(el=>{
        el.classList.remove("active");
    });

    const target = document.getElementById("page" + page);

    if(target){
        target.classList.add("active");
    }

}

/* Confetti saat web dibuka */

window.onload = () => {

    if(typeof confetti === "function"){

        confetti({
            particleCount:180,
            spread:120,
            origin:{ y:0.6 }
        });

    }

};

/* Animasi amplop */

const envelope = document.getElementById("envelope");

if(envelope){

    envelope.addEventListener("click",function(){

        this.classList.toggle("open");

    });

}
