export const dataRegister=[
{labelForm:"Nom :",inputForm:"text",name:"lastname", req:true},
{labelForm:"Prénom :",inputForm:"text",name:"firstname", req:true},
{labelForm:"Pseudo :",inputForm:"text",name:"pseudo", req:false},
{labelForm:"N° de rue :",inputForm:"number",name:"number_road", req:false},
{labelForm:"Adresse :",inputForm:"text",name:"address", req:false},
{labelForm:"Code postal :",inputForm:"number",name:"postal_code", req:false},
{labelForm:"Ville :",inputForm:"text",name:"city", req:false},
{labelForm:"Email :",inputForm:"email",name:"email", req:true},
{labelForm:"Mot de passe :",inputForm:"text",name:"password", req:true, formText:"[min 5 caractères dont un Nombre, une Majuscule et un caractère spécial (!@#$%€£)]"}
]

export const dataConnect=[
{labelForm:"Email :", inputForm:"text",name:"email",req:true},
{labelForm:"Mot de passe :", inputForm:"text",name:"password",req:true}
]