$(document).ready(function(){

	$("#te").keyup(function(){
		var n = $("#te").val().length;
		n=160-n;
		$("#cnt").text(n);
		if ( n < 0) {
    	
    	 $("#cnt").css("color", "red");
	} 

	else {

    	 $("#cnt").css("color", "green");
		}
	});



	$("#btn1").click(function(){

		var a = $("#a").text();
		$("#ou1").val(a);
		this.disabled = true;

	});
	$("#btn2").click(function(){

		var b = $("#b").text();
		$("#ou2").val(b);
		this.disabled = true;

	});
	$("#btn3").click(function(){

		var c = $("#c").text();
		$("#ou3").val(c);
		this.disabled = true;

	});

	$("#all").click(function(){
		//disable all button
		$(':button').prop('disabled', true);

		var a = $("#a").text();
		$("#ou1").val(a);
		

		var b = $("#b").text();
		$("#ou2").val(b);

		var c = $("#c").text();
		$("#ou3").val(c);

	});




});