﻿$(document).ready(function(){
	
      $('#valid').click(function(){
		  if($('#nom').val()==""){
			  alert("veuliez saisir votre nom");
		  }
		  if(($('#sexe1').prop("checked")==true)&&($('#nom').val()!="")){
			  $('#bienvenue').text("bonjour monsieur "+$('#nom').val());
              $('#authent').fadeOut('slow');			  
		  }
		  if(($('#sexe2').prop("checked")==true)&&($('#nom').val()!="")){
			  $('#bienvenue').text("bonjour madame "+$('#nom').val()); 
		      $('#authent').fadeOut('slow');
		  }
	  })
	  
	  $('#boutonAdd').click(function(){
		  if(($('#image').prop("checked")==false)&&($('#lien').prop("checked")==false)){
			  alert("Veuillez choisir le type d'ajout");
		  }
		  else if (isNaN($('#nb').val())==true){
			  alert("doit etre un nombre");
		  }
		  else if (($('#image').prop("checked")==true)&&($('#nb').val()>"0")){
			  $('#listeimages').append("<li class='"+$('#list').val()+"'>"+$("#description").val()+"<img src='images/"+$("#lienimage").val()+"'/> </li>");			  
		  }
		  else if (($('#lien').prop("checked")==true)&&($('#nb').val()>"0")){
			  $('#listeliens').append("<li class='"+$('#list').val()+"'>"+$("#description").val()+"<a href='"+$("#lienimage").val()+"'>"+$("#lienimage").val()+ "</a> </li>");
		  }
		  if(($('#nb').val()>0)&&(($('#image').prop("checked")==true)||($('#lien').prop("checked")==true))){
			  $('#nb').val($('#nb').val()-1);
	                  }	
		if($('#nb').val()=="0"){
			  alert("on atteint le nombre maximal d’insertion");
		  }
	  })

	  $('#per').click(function(){
		
	  })

});