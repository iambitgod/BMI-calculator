var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

const validateForm=()=>{
    if(age.value=="" || heightest.value=="" || weight.value=="" ){
        alert("All fields are required!");
        document.getElementById("sumbit").removeEventListener("click",countBmi);
    }else{
        countBmi();
    }
}

document.getElementById("sumbit").addEventListener("click",validateForm)

const countBmi=()=>{
    var p=[age.value , height.value ,weight.value];
    form.reset();
    var bmi = Number(p[2])/Number(p[1])/100*Number(p[1]/100)

    var result = '';
    if(bmi<18.5){
        result ='You are underweight';
    }else if(18.5<=bmi&&bmi<=24.9){
        result='You are healthy';
    }else if (25<=bmi&&bmi<=29.9){
        result='You are overweight';
    }else if (30<=bmi<=34.9){
        result='You are obesity'
    }
    var h1=document.createElement("h1");
    var pr=document.createElement("p");
    var t=document.createTextNode(result);
    var b=document.createTextNode('BMI');
    var r=document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(b);
    h1.appendChild(r);
    pr.appendChild(t);
    document.body.appendChild(h1);
    document.body.appendChild(pr);
    document.getElementById("sumbit").removeEventListener("click",countBmi);
    document.getElementById("sumbit").removeEventListener("click", validateForm);
}
document.getElementById("sumbit").addEventListener("click",countBmi);