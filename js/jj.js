	dulces()
	var puntaje = 0;
	mover()
	
	
	

	function dulces(){
		for(i=0;i<=$("[class^='col-']").length;i++){
			var x = Math.floor((Math.random() * 4) + 1);
			$("[class^='col-"+[i]+"']").html("<img src='image/"+x+".png' style='height:14%'>")

		}
		jhon()
		function jhon(){
			// i=$("[class^='col-']").length
			for(i=0;i<=$("[class^='col-']").length-2;i++){
				// alert(i)
				var x = Math.floor((Math.random() * 4) + 1);
				$(".col-"+1+" img:nth-child(1)").after("<img src='image/"+x+".png' style='height:14%'>")
				var x = Math.floor((Math.random() * 4) + 1);
				$(".col-"+2+" img:nth-child(1)").after("<img src='image/"+x+".png' style='height:14%'>")
				var x = Math.floor((Math.random() * 4) + 1);
				$(".col-"+3+" img:nth-child(1)").after("<img src='image/"+x+".png' style='height:14%'>")
				var x = Math.floor((Math.random() * 4) + 1);
				$(".col-"+4+" img:nth-child(1)").after("<img src='image/"+x+".png' style='height:14%'>")
				var x = Math.floor((Math.random() * 4) + 1);
				$(".col-"+5+" img:nth-child(1)").after("<img src='image/"+x+".png' style='height:14%'>")
				var x = Math.floor((Math.random() * 4) + 1);
				$(".col-"+6+" img:nth-child(1)").after("<img src='image/"+x+".png' style='height:14%'>")
				var x = Math.floor((Math.random() * 4) + 1);
				$(".col-"+7+" img:nth-child(1)").after("<img src='image/"+x+".png' style='height:14%'>")
			}
		}
		// eliminar()
	}

	// function eliminar(){
	// 	$("#score-text").text(puntaje)
	// 	for(var i=1;i<= $(".col-1").children().length;i++){	
	// 				col_1=$(".col-1 img:nth-child("+i+")").attr("src")
	// 				col_1_next=$(".col-1 img:nth-child("+i+")").next().attr("src")
	// 				col_1_prev=$(".col-1 img:nth-child("+i+")").prev().attr("src")
	// 				col_2=$(".col-2 img:nth-child("+i+")").attr("src")
	// 				col_2_next=$(".col-2 img:nth-child("+i+")").next().attr("src")
	// 				col_2_prev=$(".col-2 img:nth-child("+i+")").prev().attr("src")
	// 				col_3=$(".col-3 img:nth-child("+i+")").attr("src")
	// 				col_3_next=$(".col-3 img:nth-child("+i+")").next().attr("src")
	// 				col_3_prev=$(".col-3 img:nth-child("+i+")").prev().attr("src")
	// 				col_4=$(".col-4 img:nth-child("+i+")").attr("src")
	// 				col_4_next=$(".col-4 img:nth-child("+i+")").next().attr("src")
	// 				col_4_prev=$(".col-4 img:nth-child("+i+")").prev().attr("src")
	// 				col_5=$(".col-5 img:nth-child("+i+")").attr("src")
	// 				col_5_next=$(".col-5 img:nth-child("+i+")").next().attr("src")
	// 				col_5_prev=$(".col-5 img:nth-child("+i+")").prev().attr("src")
	// 				col_6=$(".col-6 img:nth-child("+i+")").attr("src")
	// 				col_6_next=$(".col-6 img:nth-child("+i+")").next().attr("src")
	// 				col_6_prev=$(".col-6 img:nth-child("+i+")").prev().attr("src")
	// 				col_7=$(".col-7 img:nth-child("+i+")").attr("src")
	// 				col_7_next=$(".col-7 img:nth-child("+i+")").next().attr("src")
	// 				col_7_prev=$(".col-7 img:nth-child("+i+")").prev().attr("src")
	// 				if(col_1===col_1_next&&col_1===col_1_prev){
	// 					$(".col-1 img:nth-child("+i+")").fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-1 img:nth-child("+i+")").next().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-1 img:nth-child("+i+")").prev().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 				}
	// 				if(col_2===col_2_next&&col_2===col_2_prev){
	// 					$(".col-2 img:nth-child("+i+")").fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-2 img:nth-child("+i+")").next().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-2 img:nth-child("+i+")").prev().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 				}
	// 				if(col_3===col_3_next&&col_3===col_3_prev){
	// 					$(".col-3 img:nth-child("+i+")").fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-3 img:nth-child("+i+")").next().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-3 img:nth-child("+i+")").prev().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 				}
	// 				if(col_4===col_4_next&&col_4===col_4_prev){
	// 					$(".col-4 img:nth-child("+i+")").fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-4 img:nth-child("+i+")").next().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-4 img:nth-child("+i+")").prev().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 				}
	// 				if(col_5===col_5_next&&col_5===col_5_prev){
	// 					$(".col-5 img:nth-child("+i+")").fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-5 img:nth-child("+i+")").next().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-5 img:nth-child("+i+")").prev().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 				}
	// 				if(col_6===col_6_next&&col_6===col_6_prev){
	// 					$(".col-6 img:nth-child("+i+")").fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-6 img:nth-child("+i+")").next().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-6 img:nth-child("+i+")").prev().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 				}
	// 				if(col_7===col_7_next&&col_7===col_7_prev){
	// 					$(".col-7 img:nth-child("+i+")").fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-7 img:nth-child("+i+")").next().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 					$(".col-7 img:nth-child("+i+")").prev().fadeOut(1000,function(){
	// 						$(this).remove()
	// 					})
	// 					puntaje += 10
	// 				}
	// 	}	
	// 	for(var i=1;i<= $(".col-1").children().length;i++){
	// 			var y = i + 1;
	// 			var x = i - 1;
	// 			var hor_1 = $("[class^='col-"+i+"']>img:nth-child(1)").attr("src")
	// 			var hor_1_next = $("[class^='col-"+y+"']>img:nth-child(1)").attr("src")
	// 			var hor_1_prev = $("[class^='col-"+x+"']>img:nth-child(1)").attr("src")
	// 			var hor_2 = $("[class^='col-"+i+"']>img:nth-child(2)").attr("src")
	// 			var hor_2_next = $("[class^='col-"+y+"']>img:nth-child(2)").attr("src")
	// 			var hor_2_prev = $("[class^='col-"+x+"']>img:nth-child(2)").attr("src")
	// 			var hor_3 = $("[class^='col-"+i+"']>img:nth-child(3)").attr("src")
	// 			var hor_3_next = $("[class^='col-"+y+"']>img:nth-child(3)").attr("src")
	// 			var hor_3_prev = $("[class^='col-"+x+"']>img:nth-child(3)").attr("src")
	// 			var hor_4 = $("[class^='col-"+i+"']>img:nth-child(4)").attr("src")
	// 			var hor_4_next = $("[class^='col-"+y+"']>img:nth-child(4)").attr("src")
	// 			var hor_4_prev = $("[class^='col-"+x+"']>img:nth-child(4)").attr("src")
	// 			var hor_5 = $("[class^='col-"+i+"']>img:nth-child(5)").attr("src")
	// 			var hor_5_next = $("[class^='col-"+y+"']>img:nth-child(5)").attr("src")
	// 			var hor_5_prev = $("[class^='col-"+x+"']>img:nth-child(5)").attr("src")
	// 			var hor_6 = $("[class^='col-"+i+"']>img:nth-child(6)").attr("src")
	// 			var hor_6_next = $("[class^='col-"+y+"']>img:nth-child(6)").attr("src")
	// 			var hor_6_prev = $("[class^='col-"+x+"']>img:nth-child(6)").attr("src")
	// 			var hor_7 = $("[class^='col-"+i+"']>img:nth-child(7)").attr("src")
	// 			var hor_7_next = $("[class^='col-"+y+"']>img:nth-child(7)").attr("src")
	// 			var hor_7_prev = $("[class^='col-"+x+"']>img:nth-child(7)").attr("src")
	// 			if (hor_1===hor_1_next&&hor_1===hor_1_prev) {
	// 				$("[class^='col-"+i+"']>img:nth-child(1)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+y+"']>img:nth-child(1)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+x+"']>img:nth-child(1)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 			}
	// 			if (hor_2===hor_2_next&&hor_2===hor_2_prev) {
	// 				$("[class^='col-"+i+"']>img:nth-child(2)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+y+"']>img:nth-child(2)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+x+"']>img:nth-child(2)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 			}
	// 			if (hor_3===hor_3_next&&hor_3===hor_3_prev) {
	// 				$("[class^='col-"+i+"']>img:nth-child(3)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+y+"']>img:nth-child(3)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+x+"']>img:nth-child(3)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 			}
	// 			if (hor_4===hor_4_next&&hor_4===hor_4_prev) {
	// 				$("[class^='col-"+i+"']>img:nth-child(4)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+y+"']>img:nth-child(4)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+x+"']>img:nth-child(4)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 			}
	// 			if (hor_5===hor_5_next&&hor_5===hor_5_prev) {
	// 				$("[class^='col-"+i+"']>img:nth-child(5)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+y+"']>img:nth-child(5)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+x+"']>img:nth-child(5)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 			}
	// 			if (hor_6===hor_6_next&&hor_6===hor_6_prev) {
	// 				$("[class^='col-"+i+"']>img:nth-child(6)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+y+"']>img:nth-child(6)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+x+"']>img:nth-child(6)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 			}
	// 			if (hor_7===hor_7_next&&hor_7===hor_7_prev) {
	// 				$("[class^='col-"+i+"']>img:nth-child(7)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+y+"']>img:nth-child(7)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
	// 				$("[class^='col-"+x+"']>img:nth-child(7)").fadeOut(1000,function(){
	// 					$(this).remove()
	// 				})
	// 				puntaje += 10
					
	// 			}
	// 	}
	// 	mas_dulces()
	// }
	// function 	mas_dulces (){
	// 	setTimeout(function mas_dulces2(){
	// 		for(i=1;i<=$("[class^='col-']").length;i++){
	// 			if ($(".col-1 img").length<7) {
	// 				var x = Math.floor((Math.random() * 4) + 1);
	// 				$(".col-"+1+" img:nth-child(1)").before("<img src='image/"+x+".png' style='height:14%;opacity:0.5'>")
	// 			}
	// 			if ($(".col-2 img").length<7) {
	// 				var x = Math.floor((Math.random() * 4) + 1);
	// 				$(".col-"+2+" img:nth-child(1)").before("<img src='image/"+x+".png' style='height:14%;opacity:0.5'>")
	// 			}
	// 			if ($(".col-3 img").length<7) {
	// 				var x = Math.floor((Math.random() * 4) + 1);
	// 				$(".col-"+3+" img:nth-child(1)").before("<img src='image/"+x+".png' style='height:14%;opacity:0.5'>")
	// 			}
	// 			if ($(".col-4 img").length<7) {
	// 				var x = Math.floor((Math.random() * 4) + 1);
	// 				$(".col-"+4+" img:nth-child(1)").before("<img src='image/"+x+".png' style='height:14%;opacity:0.5'>")
	// 			}
	// 			if ($(".col-5 img").length<7) {
	// 				var x = Math.floor((Math.random() * 4) + 1);
	// 				$(".col-"+5+" img:nth-child(1)").before("<img src='image/"+x+".png' style='height:14%;opacity:0.5'>")
	// 			}
	// 			if ($(".col-6 img").length<7) {
	// 				var x = Math.floor((Math.random() * 4) + 1);
	// 				$(".col-"+6+" img:nth-child(1)").before("<img src='image/"+x+".png' style='height:14%;opacity:0.5'>")
	// 			}
	// 			if ($(".col-7 img").length<7) {
	// 				var x = Math.floor((Math.random() * 4) + 1);
	// 				$(".col-"+7+" img:nth-child(1)").before("<img src='image/"+x+".png' style='height:14%;opacity:0.5'>")
	// 			}
	// 			$(".col-"+1+" img:nth-child(1)").animate({opacity:"1"},)
	// 			$(".col-"+2+" img:nth-child(1)").animate({opacity:"1"},)
	// 			$(".col-"+3+" img:nth-child(1)").animate({opacity:"1"},)
	// 			$(".col-"+4+" img:nth-child(1)").animate({opacity:"1"},)
	// 			$(".col-"+5+" img:nth-child(1)").animate({opacity:"1"},)
	// 			$(".col-"+6+" img:nth-child(1)").animate({opacity:"1"},)
	// 			$(".col-"+7+" img:nth-child(1)").animate({opacity:"1"},)
	// 		}
	// 	eliminar()
	// },2000)
	// }
	
	function mover(){
		
		$("[class^='col-']>img").click(function(){
			
			console.log($(this).children().length)
		})
	}