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

export const dataCreateDefunct=[
    {labelForm:"Nom :",inputForm:"text",name:"lastname", req:true},
    {labelForm:"Prénom :",inputForm:"text",name:"firstname", req:true},
    {labelForm:"Date de naissance :",inputForm:"date",name:"birthdate", req:false},
    {labelForm:"Ville :",inputForm:"text",name:"city_birth", req:false},
    {labelForm:"Date de décès :",inputForm:"date",name:"death_date", req:true},
    {labelForm:"Ville :",inputForm:"text",name:"city_death", req:false},
    {labelForm:"Nom du cimetière :",inputForm:"text",name:"cemetery", req:false},
    {labelForm:"Code postal du cimetière :",inputForm:"number",name:"postal_code", req:false}
]

export const selectAffinity=[
    'Conjoint','Conjointe','Père','Mère','Frère','Soeur','Grand-père','Grand-mère','Fils','Fille','Petit-fils','Petite-fille','Beau-fils','Belle-fille','Beau-père','Belle-mère','Neveu','Nièce','Oncle','Tante','Grand-oncle','Grande-tante','Cousin','Cousine','Ami','Amie','Petit-ami','Petite-amie','Collègue','Employeur','Professeur','Elève','Aucune'
]