const countstart = () => {
    const data=document.getElementById("textbox").value;
    hrs=parseInt(data.substring(0,2));
    min=parseInt(data.substring(3,5));
    sec=parseInt(data.substring(6));

        if(sec<59){
            sec=pad(sec+1);
            const texttt= pad(hrs)+':'+pad(min)+':'+sec;
            setData(texttt);
        }
        else if(min<59){
            min=pad(min+1);
            const texttt= pad(hrs)+':'+min+':'+"00";
            setData(texttt);
        }
        else{
            hrs=pad(hrs+1);
            const texttt= hrs+':'+"00"+':'+"00";
            setData(texttt);
        }

    setTimeout('countstart()',1000);
}


const pad=valu=>(valu<10)?('0'+valu):valu;

const setData = myTime => {
    document.getElementById("textbox").value = myTime;
}

const pause=()=>{
    document.getElementById("pause").innerHTML="unpause";
    setTimeout('countdown()',5000);
}