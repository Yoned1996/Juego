 	title_color()
 	function title_color(){
		setTimeout(function(){
			$(".main-titulo").css({color:"white"})
			title_color_2()
		},5000)
	}
	function title_color_2(){
		setTimeout(function(){
			$(".main-titulo").css({color:"yellow"})
			title_color()
		},5000)
	}
// -----------------------------------------------------------------------------------
	$(".btn-reinicio").click(function(){
		juego()
	})
// -----------------------------------------------------------------------------------
	function juego(){
		var min=2;
		var seg=0;
		var i = 0;
		var numero = 0
		var score = 0
		var rbv= 0
		var rbh=0 
		var eliminar = 0
		var masdulces=0
		var mov=0
		var espera=0
// ------------------------------------------------------------------------------------
$(".btn-reinicio").click(function(){
  i=0;
  score=0;
  mov=0;
  $(".panel-score").css("width","25%");
  $(".panel-tablero").show();
  $(".time").show();

  $("#score-text").html("0")
  $("#movimientos-text").html("0")
  $(this).html("REINICIAR")
  clearInterval(intervalo);
  clearInterval(eliminar);
  clearInterval(newdulces);
  clearInterval(tiempo);
  min=2;  //2
  seg=0;  //0
  borrartotal()
  intervalo=setInterval(function(){desplazamiento()},600)
  tiempo=setInterval(function(){timer()},1000)
})
// ------------------------------------------------------------------------------------
		setInterval(function(){timer()},1000)
		function timer(){
  			if(seg!=0){
    			seg=seg-1;
  			}
  			if(seg==0){
    			if(min==0){
      				// clearInterval(eliminar);
      				// clearInterval(newdulces);
      				// clearInterval(intervalo);
      				// clearInterval(tiempo);
      				$( ".panel-tablero" ).hide("drop","slow"/*,callback*/);
      				$( ".time" ).hide();
    			}	
    			seg=59;
    			min=min-1;
  			}
  			$("#timer").html("0"+min+":"+seg)
		}
// ------------------------------------------------------------------------------------
		setInterval(function(){dulces()},400)
		function dulces(){
			i = i +1
			numero = 0
			$(".elemento").draggable({ disabled: true});
  			if(i<8){
    			for(var j=1;j<8;j++){
      				if($(".col-"+j).children("img:nth-child("+i+")").html()==null){
        				numero=Math.floor(Math.random() * 4) + 1 ;
        				imagen="image/"+numero+".png";
        				$(".col-"+j).prepend("<img src="+imagen+" class='elemento'/>").css("justify-content","flex-start")
      				}
    			}
  			}
  			if (i==8){
  				clearInterval(dulces())
  				eliminar=setInterval(function(){
  					eliminar_2()
  				},150)		
  			}
		}
//--------------------------------------------------------------------------------------
		function eliminar_2(){

			rbh=dulcesH()
			rbv=dulcesV()
			matriz=0
			for(j=1;j<8;j++){
				matriz=matriz+$(".col-"+j).children().length;
			}
			if(rbv==1 || rbh==1){
				$(".elemento").draggable({disabled:true});
				$("div[class^='col']").css("justify-content","flex-end")
				$(".activo").hide("pulsate",1000,function(){
					var score_2 = $(".activo").length;
					$(".activo").remove("img")
					score=score+score_2
					$("#score-text").html(score)
				})
				// alert(222)
			}
			if (rbh==0 && rbv==0 && matriz!=49) {
				clearInterval(eliminar)
				masdulces=setInterval(function(){
					masdulces_2()
					
				},600)
			}
			if (rbh==0 && rbv==0 && matriz==49) {
				 $(".elemento").draggable({
      				disabled: false,
      				containment: ".panel-tablero",
      				revert: true,
      				revertDuration: 0,
      				snap: ".elemento",
      				snapMode: "inner",
      				snapTolerance: 0,
      				start: function(event, ui){
        				mov=mov+1;
        				$("#movimientos-text").html(mov)
      				}
    			});
			}
				$(".elemento").droppable({
    				drop: function (event, ui) {
      					var dropped = ui.draggable;
      					var droppedOn = this;
      					espera=0;
	      				do{
	        				espera=dropped.swap($(droppedOn));
	      				}while(espera==0)
	      				rbh=dulcesH()  
	      				rbv=dulcesV()  
	      				if(rbh==0 && rbv==0){
	        				dropped.swap($(droppedOn));
	      				}
	      				if(rbh==1 || rbv==1){	
	        				clearInterval(masdulces_2());
	        				clearInterval(eliminar_2());   
	        				eliminar=setInterval(function(){eliminar_2()},150)  
	      				}	
      				}			
				})

		}
// ------------------------------------------------------------------------------------
jQuery.fn.swap = function(b)
{
    b = jQuery(b)[0];
    var a = this[0];
    var t = a.parentNode.insertBefore(document.createTextNode(''), a);
    b.parentNode.insertBefore(a, b);
    t.parentNode.insertBefore(b, t);
    t.parentNode.removeChild(t);
    return this;
};
// ------------------------------------------------------------------------------------
		function dulcesH(){
			bh=0
  			for(j=1;j<8;j++){
  				for(var k=1;k<6;k++){
   				var hor = $(".col-"+k).children("img:nth-child("+j+")").attr("src")
				var hor_2 = $(".col-"+(k+1)).children("img:nth-child("+j+")").attr("src")
				var hor_3 = $(".col-"+(k+2)).children("img:nth-child("+j+")").attr("src")
				if((hor==hor_2) && (hor_2==hor_3) && (hor!=null) && (hor_2!=null) && (hor_3!=null)){
  					$(".col-"+k).children("img:nth-child("+j+")").attr("class","elemento activo")
					$(".col-"+(k+1)).children("img:nth-child("+j+")").attr("class","elemento activo")
					$(".col-"+(k+2)).children("img:nth-child("+j+")").attr("class","elemento activo")
					// alert(hor+hor_2+hor_3+"H"+j)
					bh=1
  				}
  				}
  			}
  			return bh;
		}
		function dulcesV(){
		bv=0
		for(var l=1;l<6;l++){
  			for(k=1;k<8;k++){
   				var ver = $(".col-"+k).children("img:nth-child("+l+")").attr("src")
				var ver_2 = $(".col-"+k).children("img:nth-child("+(l+1)+")").attr("src")
				var ver_3 = $(".col-"+k).children("img:nth-child("+(l+2)+")").attr("src")
				
				if((ver==ver_2) && (ver_2==ver_3) && (ver!=null) && (ver_2!=null) && (ver_3!=null)){
  					$(".col-"+k).children("img:nth-child("+l+")").attr("class","elemento activo")
					$(".col-"+k).children("img:nth-child("+(l+1)+")").attr("class","elemento activo")
					$(".col-"+k).children("img:nth-child("+(l	+2)+")").attr("class","elemento activo")
					// alert(ver+ver_2+ver_3+"V"+k)
					bv=1
  				}
  		
  			}
  		}
  		return bv
		}
// ------------------------------------------------------------------------------------------------
		function masdulces_2(){
			$(".elemento").draggable({ disabled: true });
			for(j=1;j<8;j++){
				if ($(".col-"+j).children().length<7){
					numero=Math.floor(Math.random() * 4) + 1 ;
        			imagen="image/"+numero+".png";
        			
        				$(".col-"+j).prepend("<img src="+imagen+" class='elemento'/>").css("justify-content","flex-end")        			
				}
			}
			matriz=0
			for(j=1;j<8;j++){
				matriz=matriz+$(".col-"+j).children().length;
			}
			if (matriz==49) {
				eliminar_2()
  			}
		}
		
// ------------------------------------------------------------------------------------------------
	}

