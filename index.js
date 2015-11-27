function getToken(){
	 $.ajax({
            url: "http://findfalcone.herokuapp.com/token",
            headers: {
            	"Accept" : "application/json"
            },
            method :'POST',
            success: function(data){
            	$("#token").val(data.token)
            }
        });
}

function find(){
	$.ajax({
            // dataType: 'json',
            url: "http://findfalcone.herokuapp.com/find",
            data :$("#req").val(),
            headers: {
            	"Accept" : "application/json",
            	"Content-type" : "application/json"
            },
            method :'POST',
            success: function(data){
            	console.log(data)
            }
        });
}