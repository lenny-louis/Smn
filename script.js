//fonction qui remet le score a 0

function reset() {
score = 0
document.getElementById("scoree").innerHTML = score=0;
}  

//je n'ai pas trouvé de son DO en mp3...
function mysound(){
new buzz.sound( "./Swoosh 1-SoundBible.com-231145780.mp3", {
    formats: [ "ogg", "mp3", "acc" ]
})	
}
//fonction qui ouvre pop up regle
function open_infos()
     {
        window.open('regle.html','regle','menubar=no, scrollbars=no, top=100, left=100, width=300, height=200');
     }
	 
	 // fonction principale couleur forme et timeout
(function () { 
    const demmarer = function(){
		start.style.backgroundColor = "#FFFACD";
		reset()
        window.alert("ATTENTION LE JEU COMMENCE");
        var couleurA = Macouleur();
		//switch couleur , timeout 2000 ms setTimeout(function(){ alert("Hello"); }, 3000);
		/*switch (expr) {
		case 'Oranges':
		console.log('Oranges are $0.59 a pound.');
		break;*/
        switch (couleurA){
            case "bleu" :
                window.setTimeout(() => {bleu.style.backgroundColor = "#6AB5F7";
                }, 2000)  
				bleu.addEventListener("click", ()=>{determiner(couleurA, "bleu" );
				})
                window.setTimeout(() => {bleu.style.backgroundColor = "#F0FFFF";
                }, 3000)
                break;
            case "rouge" :
                window.setTimeout(() => {rouge.style.backgroundColor = "#F72814";
                }, 2000) 
				rouge.addEventListener("click", ()=>{determiner(couleurA, "rouge" );           
				})				
                window.setTimeout(() => {rouge.style.backgroundColor = "#FF0000";
                }, 3000)
                break;  
            case "vert" :
                window.setTimeout(() => {vert.style.backgroundColor = "#5CF714";
                }, 2000) 
				vert.addEventListener("click", ()=>{determiner(couleurA, "vert" );               
				})				
                window.setTimeout(() => {vert.style.backgroundColor = "#32CD32";
                }, 3000)
                break;
            case "jaune" :
                window.setTimeout(() => {jaune.style.backgroundColor = "#F7EF05";
                }, 2000) 
                        jaune.addEventListener("click", ()=>{determiner(couleurA, "jaune" );                 
				})
                window.setTimeout(() => {jaune.style.backgroundColor = "#FFFF00";
                }, 3000)
                break;
        }	    
    }
    const Macouleur = function(){
        var aupif = Math.floor(Math.random() * 4)
		var couleur = ["bleu", "rouge","vert", "jaune"]
        return couleur[aupif];
    }
    const determiner = function(a , b){
        if(a == b){
            correct() //ajouter 1 point
			mySound(); // lance le son 
        }
    }
	
	/* 
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });
	*/
    window.addEventListener("DOMContentLoaded", (event) => {
        var start = document.getElementById("start");
		 var rouge = document.getElementById("rouge");
        var bleu = document.getElementById("bleu");       
        var jaune = document.getElementById("jaune");
		var vert = document.getElementById("vert");
        start.addEventListener("click", demmarer );
      });	      
	//fonction ajouter 1 au score
	var score = 0;
	document.getElementById("scoree").innerHTML = +score;
    function correct() {
	++score;
	document.getElementById("scoree").innerHTML = +score;
	return true;
}
})();
