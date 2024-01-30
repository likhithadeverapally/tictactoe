let boxes=document.querySelectorAll(".box");
let r=document.querySelector(".reset");
let msg=document.querySelector(".hide")
let n=document.querySelector(".new");
let m=document.querySelector(".msg");
let turn0=true;

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>
{ 
    console.log("box clicked")
    if(turn0==true)
    {
        box.innerText="X";
        turn0=false;
    }
    else
    {
        box.innerText="O";
        turn0=true;
    }
    box.disabled=true;
    checkWinner();
});
    
});

const checkWinner = ()=>
{
    for(let p of win)
    {
        let p1 = boxes[p[0]].innerText;
        let p2 = boxes[p[1]].innerText;
        let p3 = boxes[p[2]].innerText;

        if(p1!="" && p2!="" && p3!="")
        {
            if(p1==p2 &&  p2==p3)
            {
                if(turn0==true)
                {
                    console.log("winner is O");
                    msg.className="win_container";
                    m.innerText="Congratulations,Winner is O";
                    for(b of boxes)
                    {
                        b.disabled=true;
                    }
                }
                else{
                    console.log("winner is X");
                    msg.className="win_container";
                    m.innerText="Congratulations,Winner is X";
                    for(b of boxes)
                    {
                        b.disabled=true;
                    }
                }
            }
        }
    }   
}
n.onclick=()=>{
    for(let b of boxes)
    {
        b.disabled=false;
        b.innerText="";
    }
    msg.className="hide";
}
r.onclick=()=>{
    for(let b of boxes)
    {
        b.disabled=false;
        b.innerText="";
    }
    msg.className="hide";
}
