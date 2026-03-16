function patientLogin(){

let email=document.getElementById("pemail").value;
let pass=document.getElementById("ppass").value;

if(email=="patient" && pass=="123"){
window.location="patient-dashboard.html";
return false;
}

alert("Invalid Login");
return false;

}

function doctorLogin(){

let email=document.getElementById("demail").value;
let pass=document.getElementById("dpass").value;

if(email=="doctor" && pass=="123"){
window.location="doctor-dashboard.html";
return false;
}

alert("Invalid Login");
return false;

}

function bookAppointment(){

let name=document.getElementById("name").value;

document.getElementById("msg").innerHTML=
"Appointment booked for "+name;

return false;

}