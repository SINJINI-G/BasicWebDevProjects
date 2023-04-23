const getData=()=>{
    val=document.getElementById("inp").innerHTML;
    hrs=val.substring(0,2);
    min=val.substring(3,5);
    sec=val.substring(6);
    console.log(--sec);
    while(val!="00:00:00"){
        if(sec!=0){
            sec=pad(--sec);
            const myTime= hrs+':'+min+':'+sec;
            setData(myTime);
        }
        else if(min!=0){
            min=pad(--min);
            const myTime= hrs+':'+min+':'+"59";
            setData(myTime);
        }
        else{
            hrs=pad(--hrs);
            const myTime= hrs+':'+"59"+':'+"59";
            setData(myTime);
        }
        setTimeout('getData()',100);
    }
}

const checkData=()=>{
    data=document.getElementById("inp").innerHTML;
    if(data.length!=8)
    alert("Wrong Syntax!! Input in 00:00:00 Format")
}

const pad=valu=>(valu<10)?('0'+valu):valu;

const setData= myTime => {
    document.getElementById("inp").innerHTML = myTime;
}

const alerr()
{
    alert(abc
}