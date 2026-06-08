function showPage(page){

    console.log("Pindah ke page", page);

    document.querySelectorAll(".page").forEach(el=>{
        el.classList.remove("active");
    });

    const target = document.getElementById("page" + page);

    console.log(target);

    if(target){
        target.classList.add("active");
    }else{
        alert("page" + page + " tidak ditemukan");
    }

}

/* confetti awal */

window.onload=()=>{

    confetti({
        particleCount:180,
        spread:120,
        origin:{y:0.6}
    });

}

/* amplop */

document
.getElementById("envelope")
.addEventListener("click",function(){

    this.classList.toggle("open");

});

/* hadiah */

document
.getElementById("gift")
.addEventListener("click",()=>{

    document
    .getElementById("gift")
    .style.display="none";

    document
    .getElementById("polaroid-container")
    .style.display="block";

    confetti({
        particleCount:250,
        spread:180
    });

    const photos =
    document.querySelectorAll(".polaroid");

    photos.forEach((photo,index)=>{

        setTimeout(()=>{

            photo.classList.add("show");

        },index*1000);

    });

    setTimeout(()=>{

        document
        .getElementById("ending")
        .style.display="block";

    },5000);

});
