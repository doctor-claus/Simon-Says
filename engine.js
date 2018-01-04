$(document).ready(function(){
	var simon = {
		color: ["green", "blue", "yellow", "red"],
		sequence: [],
		step: 0,
		i: 0,
		count: 0,
		num: 1,
		nextSequence: function(){
			var nextColor = simon.color[Math.floor(Math.random() * simon.color.length)];
			simon.sequence.push(nextColor);
			simon.count += 1;
			var interval = setInterval(function(){
				$(".counter").text(simon.count);
				var id = simon.sequence[simon.i];
				$("#" + id).addClass(id + '-active');
				if(id == 'green'){
					bleep.play();
				}
				if(id == 'red'){
					bleep1.play();
				}
				if(id == 'yellow'){
					bleep2.play();
				}
				if(id == 'blue'){
					bleep3.play();
				}
				setTimeout(function(){
					$("#" + id).removeClass(id + '-active');
				}, 500);
				if(simon.i == simon.sequence.length - 1){
					simon.i = 0;
					clearInterval(interval);
				}
				else{
					simon.i += 1;
				}
			}, 1000);
		},
		play: function(input){
			if(simon.sequence.length == 0){
				simon.nextSequence();
			}
			else{
				if(input == simon.sequence[simon.step]){
					if((simon.step == simon.sequence.length - 1) && (simon.count <= 19)){
						if(input == 'green'){
							bleep.play();
						}
						if(input == 'red'){
							bleep1.play();
						}
						if(input == 'yellow'){
							bleep2.play();
						}
						if(input == 'blue'){
							bleep3.play();
						}
						simon.nextSequence();
						simon.step = 0;
					}
					else if((simon.step == simon.sequence.length - 1) && (simon.count > 19)){
						$(".counter").text("**");
						var interval1 = setInterval(function(){
							if(input == "green"){
								bleep.play();
								$("#" + input).css('background-color', '#6DE75A');
								setTimeout(function(){
									$("#" + input).css('background-color', 'green');
								}, 500);
							}
							if(input == "red"){
								bleep1.play();
								$("#" + input).css('background-color', '#FF6060');
								setTimeout(function(){
									$("#" + input).css('background-color', 'red');
								}, 500);
							}
							if(input == "blue"){
								bleep3.play();
								$("#" + input).css('background-color', '#5C5FFF');
								setTimeout(function(){
									$("#" + input).css('background-color', 'blue');
								}, 500);
							}
							if(input == "yellow"){
								bleep2.play();
								$("#" + input).css('background-color', '#FDFF63');
								setTimeout(function(){
									$("#" + input).css('background-color', 'yellow');
								}, 500);
							}
							if(simon.num == 4){
								clearInterval(interval1);
							}
							simon.num += 1;
						}, 1000);
						simon.step = 0;
						simon.sequence = [];
					}
					else{
						if(input == 'green'){
							bleep.play();
						}
						if(input == 'red'){
							bleep1.play();
						}
						if(input == 'yellow'){
							bleep2.play();
						}
						if(input == 'blue'){
							bleep3.play();
						}
						simon.step += 1;
					}
				}
				else if(flag == false){
					bleep4.play();
					$(".counter").text("!!");
					setTimeout(function(){
						$(".counter").text(simon.count);
					}, 2000);
					setTimeout(function(){
						var interval = setInterval(function(){
							var id = simon.sequence[simon.i];
							$("#" + id).addClass(id + '-active');
							if(id == 'green'){
								bleep.play();
							}
							if(id == 'red'){
								bleep1.play();
							}
							if(id == 'yellow'){
								bleep2.play();
							}
							if(id == 'blue'){
								bleep3.play();
							}
							setTimeout(function(){
								$("#" + id).removeClass(id + '-active');
							}, 500);
							if(simon.i == simon.sequence.length - 1){
								simon.i = 0;
								clearInterval(interval);
							}
							else{
								simon.i += 1;
							}
						}, 1000);
					}, 2000);
					simon.step = 0;
				}
				else if(flag == true){
					bleep4.play();
					$(".counter").text("!!");
					simon.sequence = [];
					simon.step = 0;
					simon.count = 0;
					setTimeout(function(){
						simon.nextSequence();
					}, 2000);
				}
			}
		}
	};
	var flag = false;
	var mode = "off";
	$('.simon-button').mousedown(function(){
  		var color = $(this).attr('id');
  		if(mode == "on"){
    		if(color == 'green'){
      			$(this).css('background-color', '#6DE75A');
      			simon.play(color);
    		}
    		if(color == 'red'){
      			$(this).css('background-color', '#FF6060');
      			simon.play(color);
    		}
    		if(color == 'blue'){
      			$(this).css('background-color', '#5C5FFF');
      			simon.play(color);
    		}
    		if(color == 'yellow'){
      			$(this).css('background-color', '#FDFF63');
      			simon.play(color);
    		}
    	}
  	});
  	$('.simon-button').mouseup(function(){
  		var color = $(this).attr('id');
  		if(mode == "on"){
    		if(color == 'green'){
    			$(this).css('background-color', 'green');
    		}
    		if(color == 'red'){
      			$(this).css('background-color', 'red');
    		}
    		if(color == 'blue'){
    			$(this).css('background-color', 'blue');
    		}
    		if(color == 'yellow'){
    			$(this).css('background-color', 'yellow');
    		}
    	}
	});
	$(".start").click(function(){
		simon.sequence = [];
		simon.step = 0;
		simon.count = 0;
		mode = "on";
		simon.nextSequence();
	});
	$(".strict").click(function(){
		if(flag == false){
			flag = true;
			$(".indicator").css('background-color', 'red');
		}
		else if(flag == true){
			flag = false;
			$(".indicator").css('background-color', '#4F0202');
		}
	});
});
