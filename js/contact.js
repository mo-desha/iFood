function sendMail() {
    var params = {
        name : document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        Msg : document.getElementById("Msg").value ,
    } ;

const ServicesId = "service_phwilfv" ;
const TempletId = "template_yhd0f36" ;

emailjs.send(ServicesId , TempletId ,params)
.then(
    res => {
        document.getElementById("name").value = "" ;
        document.getElementById("email").value = "" ;
        document.getElementById("Msg").value = "" ;
        console.log(res) ;
        alert(" your massege sent sucessfully !")
    }) 
    .catch((err)=> console.log(err))
}