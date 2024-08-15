product_name = document.getElementById("product_name");
payment = document.getElementById("payment");
packing = document.getElementById("packing");
delivery = document.getElementById("delivery");
arrived = document.getElementById("arrived");

order_status="arrived";




if (order_status=="arrived"){
    payment.style="border: 2px solid #130505;" //solid line
    packing.style="border: 2px solid #130505;" //solid line
    delivery.style="border: 2px solid #130505;" //solid line
    arrived.style="border: 2px solid #130505;" //solid line
    document.getElementById("loader1").classList.add("stop-animation");
    document.getElementById("loader2").classList.add("stop-animation");
    document.getElementById("loader3").classList.add("stop-animation");
}
else if (order_status=="delivery"){
    payment.style="border: 2px solid #130505;" //solid line
    packing.style="border: 2px solid #130505;" //solid line
    delivery.style="border: 2px solid #130505;" //solid line
    arrived.style="border: 2px dashed #130505;" //dashed line
    document.getElementById("loader1").classList.add("stop-animation");
    document.getElementById("loader2").classList.add("stop-animation");
    document.getElementById("loader3").classList.remove("stop-animation");
}
else if (order_status=="packing"){
    payment.style="border: 2px solid #130505;" //solid line
    packing.style="border: 2px solid #130505;" //solid line
    delivery.style="border: 2px dashed #130505;" //dashed line
    arrived.style="border: 2px dashed #130505;" //dashed line
    document.getElementById("loader1").classList.add("stop-animation");
    document.getElementById("loader2").classList.remove("stop-animation");
    document.getElementById("loader3").classList.remove("stop-animation");
}
else if (order_status=="payment"){
    payment.style="border: 2px solid #130505;" //solid line
    packing.style="border: 2px dashed #130505;" //dashed line
    delivery.style="border: 2px dashed #130505;" //dashed line
    arrived.style="border: 2px dashed #130505;" //dashed line
    document.getElementById("loader1").classList.remove("stop-animation");
    document.getElementById("loader2").classList.remove("stop-animation");
    document.getElementById("loader3").classList.remove("stop-animation");
}

//product_name.innerHTML="guitar"