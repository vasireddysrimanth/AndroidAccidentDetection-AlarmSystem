function validate(frm){
	document.getElementById("nameerr").innerHTML="";
	document.getElementById("emailerr").innerHTML="";
	document.getElementById("phoneerr").innerHTML="";
	document.getElementById("pworderr").innerHTML="";
	document.getElementById("dateerr").innerHTML="";
    document.getElementById("bgerr").innerHTML="";
    
    let name=frm.name.value;
    let email=frm.email.value;
    let phone=frm.phone.value;
    let password=frm.password.value;
    let dob=frm.dob.value;
    let bldgrp=frm.bldgrp.value;
    
    let flag=true;
   
    if(name==""){
		document.getElementById("nameerr").innerHTML="person name is required";
	    flag=false;
	}
    else if(name.length<5){
		document.getElementById("nameerr").innerHTML="person name should contain min 5 letters";
		flag=false;
	}
	if(email==""){
		document.getElementById("emailerr").innerHTML="email  is required";
		flag=false;
	}
    else if(email.length<5){
		document.getElementById("emailerr").innerHTML="person name should contain min 5 letters";
		flag=false;
	}
	if(phone==""){
		document.getElementById("phoneerr").innerHTML="phone number is required";
		flag=false;
	}
    else if(phone.length<10 || phone.length>10){
		document.getElementById("phoneerr").innerHTML="Enter a valid phone number";
		flag=false;
	}
	if(password==""){
		document.getElementById("pworderr").innerHTML="password is required";
		flag=false;
	}
    else if(password.length<=5){
		document.getElementById("pworderr").innerHTML="password should atlest contain eight letters";
		flag=false;
	}
   if(dob==""){
		document.getElementById("dateerr").innerHTML="DOB is required";
		flag=false;
	}
   if(bldgrp=="select"){
		document.getElementById("bgerr").innerHTML="Blood group is required";
		flag=false;
	}
	return flag;
}