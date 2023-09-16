var buttons=document.getElementsByClassName("btn");
var display=document.getElementById("res-disp");
var operand1=0;
var operand2=null;
var opeartor=null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(value == '+'){
           opeartor='+';
           operand1=display.textContent;
            display.innerText='';
        }else if(value=='-'){
            opeartor='-';
            operand1=display.textContent;
            display.innerText='';

        }else if(value=='*'){
             opeartor='*';
             operand1=display.textContent;
             display.innerText='';
        }else if(value=='/'){
             opeartor='/';
             operand1=display.textContent;
             display.innerText='';
        }else if(value== '=' ){
             operand2=display.textContent;
              var ans;
             if(opeartor=='%'){
                    ans=(operand1/100) *(operand2);
             }else{
                  ans=eval(operand1+" "+opeartor+" "+ operand2);
             }
            
             display.innerText=ans;   

        }else if(value == '+/-'){
            
         display.innerText = eval(parseFloat(display.innerText) * (-1) );

        }else if(value=='AC'){
                operand1=0;
                operand2=null;
                opeartor=null;
                display.innerText='';

        }else if(value == '%'){
            opeartor='%'
            operand1=display.textContent;
            display.innerText='';
        }else{
            display.innerText+=value;

        }


        
    })
}



//input from the keyboard
document.addEventListener("keypress",function(event){
      var key;
      key=event.keyCode;
      value = String.fromCharCode(key);
      console.log(key+" "+value);
      var numArray = [1,2,3,4,5,6,7,8,9,0];
  if(value=='+' || value=='-'  || value=='*'  || value=='/' || value=='%'){
         opeartor=value;
            operand1=display.textContent;
            display.innerText = null;
  }else if(value =='='){
    operand2=display.textContent;
    var ans;
    ans=eval(operand1+" "+opeartor+" "+ operand2);
    display.innerText=ans;
 }else if(key=='13'){
         operand2=display.textContent;
         var ans;
         ans=eval(operand1+" "+opeartor+" "+ operand2);
         display.innerText=ans;   
  }else if(value in numArray){
      
    display.innerText+=value;

  }

})


document.addEventListener('keydown',function(event){
    var key;
    key=event.keyCode;

    if(key=='46'){
        operand1=0;
        operand2=null;
        opeartor=null;
        display.innerText=null;
    }
})

