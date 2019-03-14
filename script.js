$(document).ready(function(){
	$(".form").hide();
	$(".row").show();
  $(".add").click(function(){
    $(".add").hide();
    $(".form").show();
    $(".row").hide();
    $("#namee").keydown(function(){
    	value = $(this).val();
    	$("#na").html("<b>"+value+"</b>");
    });
    $("#phno").keydown(function(){
    	value = $(this).val();
    	$("#ph").html("<b>"+value+"</b>");
    });
    $("#namee").change(function(){
    	value = $(this).val();
    	$("#na").html("<b>"+value+"</b>");
    });
    $("#namee").change(function(){
    	value = $(this).val();
    	$("#na").html("<b>"+value+"</b>");
    });
  });
  $(".adding").click(function() {
  		//$(".adding").hide();
  		$(".form").hide();
  		$(".add").show();
  		$(".row").show();
  	    var namee = $("#namee").val();
  	    var phno = $("#phno").val();
  	    var nameediv = document.createElement("DIV");
  	    var nametxt = document.createTextNode(namee);
  	    nameediv.appendChild(nametxt);
  	    nameediv.className = "col-sm-5";
  	    var divcol = document.createElement("DIV");
  	    divcol.appendChild(nameediv);
  	    divcol.className = "col";
  	    $(".row").append(divcol);
  	    var phnodiv = document.createElement("DIV");
  	    var phnotxt = document.createTextNode(phno);
  	    phnodiv.appendChild(phnotxt);
  	    phnodiv.className = "col-sm-5";
  	    divcol.appendChild(phnodiv); 
  	    $(".row").append(divcol);
  	    var divbtn = document.createElement("BUTTON");
  	    var btntxt = document.createTextNode("delete");
  	    divbtn.appendChild(btntxt);
  	    divbtn.className = "clear btn btn-success";  	    
  	    divcol.appendChild(divbtn);
  	    var clearlist =$(".clear");
  	    for(var j =0; j < clearlist.length; j++){
  	    	clearlist[j].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
           }
  	    }
  });
});