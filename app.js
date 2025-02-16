let h1=document.querySelector("h1");
let inp=document.querySelector("#inp");
let ul=document.querySelector("ul");
let btn=document.querySelector("#btn1");
let btn1=document.querySelector("#btn2");
let symbol="~!@#$%^&*()+}{;_<>.,/'";
let audio=new Audio("danger_warning.mp3");
let body=document.querySelector("body");
let chekBtn=document.querySelector("#chekbtn");
let box=document.querySelector("#box");
let mode=document.querySelector("#mode");
let lable=document.querySelector("#lable");
let container=document.querySelector(".container");
console.log(container);

function task()
{
    let li=document.createElement("li");
    let delbtn=document.createElement("button");
    let time=document.createElement("input");
        time.id="t";
        time.classList.add("time");
        time.type="time";
        time.min=0;
        time.max=0;
    let btnT=document.createElement("button");
    btnT.innerText="Set Time";
    btnT.id="btnT";
    btnT.classList.add("btnT");
    delbtn.innerText="Delete Task";
    ul.appendChild(li);
    li.innerText = inp.value;
    let type=li.innerText;
    //type.trim();

    for (let index = 0; index < type.length; index++) {
         
        for(let j=0;   j<symbol.length;   j++)
        {
           if(type[index] !=" ")
            {
                if(!isNaN(type[index]))
                    { 
                        alert("PLEASE ENTER VALID TASK!!");
                        li.remove();
                        break;
    
                }else if(symbol[j]==type[index])
                {
                    alert("PLEASE ENTER VALID TASK!!");
                        li.remove();
                        break; 
                }  
            }   
        } 
    }
    
    if(li.innerText == "")
    {
        alert("PLESE ENTER YOUR TASK");
        li.remove();
    }

    if (chekBtn.checked) {

        li.classList.add("dark-li");

    } else {

        li.classList.add("light-li"); 

    }

    inp.value="";
    li.appendChild(delbtn);
    li.appendChild(time);
    li.appendChild(btnT);


     btnT.addEventListener("click", function(){
     let a=parseInt(time.value);
     if(!isNaN(a))
     {
        let minuts=0;
        let secound=1;
        let hour=0;
        let clearId=setInterval(() => {
        btnT.innerText=`${minuts}:${secound} Time`;
        secound++;

        if(secound == 60)
        {
            minuts++;
            secound=1;
        }
        if(minuts == a)
        {
            clearInterval(clearId);
            audio.play();
            btnT.innerText="Set Time";
           
        }
        
       },1000); 
     }   
});

    delbtn.classList.add("delete");
     delbtn.addEventListener("click",function()
    {
        let par=this.parentElement;
        delbtn.classList.add("del");
        audio.pause();
        par.remove();

    }); 
}

btn.addEventListener("click",task);

chekBtn.addEventListener("change",function(){

    let allLi = document.querySelectorAll("li");
    let button = document.querySelectorAll("button");

    if(this.checked)
    {
       body.classList.add("b");
       box.classList.add("box1");
       mode.classList.add("mode");
       inp.classList.add("innp");
       lable.classList.add("color");


    for(let i=0;   i<allLi.length;    i++)
    {
        allLi[i].style.color="white";
    }

    for(let i=0;  i<button.length;  i++)
    {
        if(button[i].classList.contains("btnT"));
        {
            //  button[i].classList.add("box1");
            // console.log("class avalable");
            console.log(button[i].classList);
        }
    }
    //console.log("cheaked");
    container.classList.add("container-dark");
    

    }else if(!(this.checked))
    {
        body.classList.remove("b");
        box.classList.remove("box1");
        mode.classList.remove("mode");
        inp.classList.remove("innp");
        lable.classList.remove("color");

        for(let i=0;   i<allLi.length;    i++)
            {
                allLi[i].style.color="black";
            }

            for(let i=0;  i<button.length;  i++)
                {
                    if(button[i].classList.contains("btnT"));
                    {
                        // button[i].classList.remove("box1");
                        // console.log("class not avalable");
                        console.log(button[i].classList);
                    }
                }
                container.classList.remove("container-light");
    }

});
container.classList.remove("container-light");