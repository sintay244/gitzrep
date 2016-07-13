var vicRec=Array(),vicPhone=Array(),vicStreet=Array(),street,phone;
var vicNum=prompt("how many victims do u want to register");
for(var i=0;i<vicNum;i++) {
    var name=prompt("what is the name of the victim");
    vicRec.push(name);
    phone=prompt("what is his phone number");
    vicPhone.push(phone);
    street=prompt("what is his address");
    vicStreet.push(street);
}




