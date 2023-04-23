const countdown = () => { 
    document.getElementById("start").disabled=true;
    if(document.getElementById("pause").value!="Unpause"){
        const data=document.getElementById("textbox").value;
        if(data.length!=8||data.charAt(2)!=':'||data.charAt(5)!=':'){
        alert("Wrong Input Syntax!! Try this '00:00:00'!!!");
        reset();
        return;
        }
        hrs=parseInt(data.substring(0,2));
        min=parseInt(data.substring(3,5));
        sec=parseInt(data.substring(6));
        if(min>=60||sec>=60){
        alert("Are you dumb?? For God's sake college ki classes attend karo!!");
        reset();
            return;
        }
        
        if(data!="00:00:00"){
            if(sec!=0){
                sec=pad(sec-1);
                const texttt= pad(hrs)+':'+pad(min)+':'+sec;
                setData(texttt);
            }
            else if(min!=0){
                min=pad(min-1);
                const texttt= pad(hrs)+':'+min+':'+"59";
                setData(texttt);
            }
            else{
                hrs=pad(hrs-1);
                const texttt= hrs+':'+"59"+':'+"59";
                setData(texttt);
            }
        }
        else 
        {
            playy();
            setData("Done");
            return ;  
        }
        setTimeout('countdown()',999);
    }
}

function playy() {
    var audio = new Audio('https://bigsoundbank.com/UPLOAD/mp3/1298.mp3');
    audio.play();
    setTimeout(() => { audio.pause(); }, 10000);
  }

const pad=valu=>(valu<10)?('0'+valu):valu;

const setData = myTime => {
    document.getElementById("textbox").value = myTime;
}

const pause=()=>{
    
    if(document.getElementById("pause").value=="Pause")
        document.getElementById("pause").value="Unpause";    
    else
    {
        document.getElementById("pause").value="Pause";
        countdown();    
    }
}

const reset=()=>{
    document.getElementById("start").disabled=false;
    document.getElementById("pause").value="Unpause";
    document.getElementById("textbox").value="00:00:00";
    setTimeout('document.getElementById("pause").value="Pause"',1000);
}

