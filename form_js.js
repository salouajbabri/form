let myform = document.getElementById('myform');
let lname = document.getElementById('lname');
let fname = document.getElementById('fname');
let age = document.getElementById('age');
let adresse = document.getElementById('adresse');
let email = document.getElementById('email');
let obj = document.getElementById('obj');


function checkString(str){
    var test =true ;
    var chars = str.toLowerCase().split("");
    for (var i=0; i < chars.length ;i++){
        if (!(chars[i].charCodeAt() >=97 && chars[i].charCodeAt() <=122)){
            test= false
        }
    }
    return test
}


function checklname (name){
    let str = name.split("");
    if (name.trim() === "") return false ;
    else {
        for ( var i =0 ; i< str.length ;i++){
            if (!(str[i].toUpperCase() === str[i]))return false ;

        }
    }
    return checkString(name)
}
function checkfname (prenom){
    let string = prenom.split ('');
    if (prenom.trim() === "") return false ;
    else{
        for (var j =0;j<string.length;j++){
            if ( j ===0){
                if (!string[j].toUpperCase() === string[j])
                return false ;
                break;
            }
        }
    }
    return checkString(prenom);
}
function checkage (number){
    if (number <18)return false ;
    return true ;
}
function checkemail(mail){
    const regexExp = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/gi;
    return regexExp.test(mail);
}
function checkadresse(text){
    let test=true;
    if (text.length >300) return false ;
    let a = /[~`!#$%\^&*+=\-\[\]\\';,@/{}|\\":<>\?]/g;
    if (a.test(text)) return false;
    return test ;
}
function checkobj(text){
     let test = true ;
     if (checkString(test)=== false){
        return false ;
     }
     return test ;
}
myform.addEventListener ('submit', function(e)
{
    if (!checklname(lname.value))
    {
        let myerrorln = document.getElementById('errorln');
        myerrorln.innerText = 'le nom en majuscule';
        myerrorln.style.color = "red";
        alert ('le nom en majuscules');
        e.preventDefault();
    }
    else {
        let myrightln = document.getElementById('rightln');
        myrightln.innerText = 'le nom est correcte';
        myrightln.style.color = "green";
        alert ('le nom est correcte');
        e.preventDefault();
    }
    if (!checkfname(fname.value))
    {
        let myerrorfn = document.getElementById('errorfn');
        myerrorfn.innerText = 'le prénom doit commencer par majuscule';
        myerrorfn.style.color = "red";
        alert ('le prénom doit commencer par majuscule');
        e.preventDefault();
    }
    if (!checkage(age.value))
    {
        let myerrorage = document.getElementById('errorage');
        myerrorage.innerText = 'l\'age doit etre supérieur à 18'
        myerrorage.style.color = "red ";
        alert ('l\'age doit etre supérieur à 18')
        e.preventDefault();
    }
    else {
        let myrightage = document.getElementById('rightage');
        myrightage.innerText = 'l\'age est valide';
        myrightage.style.color = "green";
        alert ('l\'age est valide');
        e.preventDefault();
    }
    if(!checkemail(email.value))
    {
        let myerroremail = document.getElementById('erroremail');
        myerroremail.innerText = 'l\'email n\'est pas valide';
        myerroremail.style.color ="red";
        alert ('l\'email n\'est pas valide');
        e.preventDefault();
    }
    if (checkadresse(adresse.value))
    {
        let myerr_adresse = document.getElementById('erroradresse');
        myerr_adresse.innerText = 'l\'adresse ne doit pas dépasser les 300 caractères';
        myerr_adresse.style.color = "red";
        alert ('l\'adresse ne doit pas dépasser les 300 caractères');
        e.preventDefault(); 
    }
    if (!checkobj(obj.value))
    {
        let myerr_obj = document.getElementById('errorobj');
        myerr_obj.innerText = 'l\'objectif ne doit pas contenir des caractères spéciaux';
        myerr_obj.style.color = "red";
        alert ('l\'objectif ne doit pas contenir des caractères spéciaux');
        e.preventDefault(); 
    }

    
})
