/* afficher une boite de dialogue avec un message quand on sort du champs de saisie */


document.getElementById("lastname").onblur = function() {myFunction()};

function myFunction() 
{
    alert("Merci de votre participation");
}


