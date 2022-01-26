function like_dislike() {
    let bx = document.querySelector("#id2")
    let bx2 = bx.innerHTML;
    let child = document.querySelector("#id1").value;
    let childvalue = `
    <div >
    <h2> ${child} </h2>
    <span>0</span>
   <span onclick=like(this,0) style="cursor: pointer;">&#128077;</span>
    
   <span style="margin-left: 30px;" >0</span>
    <span onclick=like(this,1) style="cursor: pointer;">&#128078;</span>
</div>`
    bx.innerHTML = bx2 + childvalue;

}

function like(b, a) {
    let bx;
    if (a == 0) {
        bx = b.parentElement.children[1];
    }
    else if (a == 1) {
        bx = b.parentElement.children[3];
    }
    let bx2 = parseInt(bx.innerHTML);
    bx.innerHTML = bx2 + 1;
}

