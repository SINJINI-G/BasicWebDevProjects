
function disp(a){
     b=document.getElementsByClassName("display")[0];
     console.log(b.innerHTML);
     c=(b.innerHTML).charAt(((b.innerHTML).length)-1);
     if(a=='+'||a=='-'||a=='*'||a=='/'||a=='%'){
        if((a=='*'||a=='/'||a=='%')&&(b.innerHTML)=="")
            alert("Wrong use of operator! Clear and try again.")
        else  if(c!='+'&&c!='-'&&c!='*'&&c!='/'&&c!='%')
            b.innerHTML+=a;
        else{
        alert("Two operators can not be taken consecutively! Clear and try again.");
        }  
    }
    else
    b.innerHTML+=a;

}

function eva(){
    b=document.getElementsByClassName("display")[0];
    console.log(b.innerHTML);
    res=eval(b.innerHTML);
    console.log(res);
    b.innerHTML=res;
}

function clea(){
    b=document.getElementsByClassName("display")[0];
    b.innerHTML=(b.innerHTML).substring(0,((b.innerHTML).length)-1);
}

function clearAll(){
    b=document.getElementsByClassName("display")[0];
    b.innerHTML="";
}

