product_name = document.getElementById("product_name");
payment = document.getElementById("payment");
packing = document.getElementById("packing");
delivery = document.getElementById("delivery");
arrived = document.getElementById("arrived");

isDone=true;

if(isDone==true){
    payment.style="border: 2px solid #130505;" //solid line
}
else{
    payment.style="border: 2px dashed #130505;" //dashed line
}

product_name.innerHTML="guitar"