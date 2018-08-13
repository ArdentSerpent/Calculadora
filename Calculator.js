jQuery(document).ready(function($){
	$('#operation4')
	.on('click',
		function(){
			$('#operation').html('<table class="calculadora" onload="init();"><tr><td colspan="5"><span id="resultado"></span></td></tr><tr><td><button class="table" id="siete">7</button></td><td><button class="table" id="ocho">8</button></td><td><button class="table" id="nueve">9</button></td><td><button class="table" id="divicion">/</button></td></tr><tr><td><button class="table" id="cuatro">4</button></td><td><button class="table" id="sinco">5</button></td><td><button class="table" id="seis">6</button></td><td><button class="table" id="multiplicacion">*</button></td></tr><tr><td><button class="table" id="uno">1</button></td><td><button class="table" id="dos">2</button></td><td><button class="table" id="tres">3</button></td><td><button class="table" id="resta">-</button></td></tr><tr><td><button class="table" id="igual">=</button></td><td><button class="table" id="reset">C</button></td><td><button class="table" id="cero">0</button></td><td><button class="table" id="suma">+</button></td></tr></table>');

			var uno;
			var dos;
			var operation;

			$('#siete')
			.on('click',
				function(){
					$('#resultado').append("7");
				})
			$('#ocho')
			.on('click',
				function(){
					$('#resultado').append("8");
				})
			$('#nueve')
			.on('click',
				function(){
					$('#resultado').append("9");
				})
			$('#cuatro')
			.on('click',
				function(){
					$('#resultado').append("4");
				})
			$('#sinco')
			.on('click',
				function(){
					$('#resultado').append("5");
				})
			$('#seis')
			.on('click',
				function(){
					$('#resultado').append("6");
				})
			$('#uno')
			.on('click',
				function(){
					$('#resultado').append("1");
				})
			$('#dos')
			.on('click',
				function(){
					$('#resultado').append("2");
				})
			$('#tres')
			.on('click',
				function(){
					$('#resultado').append("3");
				})
			$('#cero')
			.on('click',
				function(){
					$('#resultado').append("0");	
				})
			$('#reset')
			.on('click',
				function(){
					$('#resultado').empty();
				})
			$('#suma')
			.on('click',
				function(){
					uno = $('#resultado').html();
					operation = "+";
					$('#resultado').empty();
				})
			$('#resta')
			.on('click',
				function(){
					uno = $('#resultado').html();
					operation = "-";
					$('#resultado').empty();
				})
			$('#divicion')
			.on('click',
				function(){
					uno = $('#resultado').html();
					operation = "/";
					$('#resultado').empty();
				})
			$('#multiplicacion')
			.on('click',
				function(){
					uno = $('#resultado').html();
					operation = "*";
					$('#resultado').empty();
				})
			$('#igual')
			.on('click',
				function(){
					dos = $('#resultado').html();

					if (operation === "+") {
						var resultado = parseInt(uno) + parseInt(dos);
						$('#resultado').html(resultado);
					} else if (operation === "-") {
						var resultado = parseInt(uno) - parseInt(dos);
						$('#resultado').html(resultado);
					} else if (operation === "/") {
						var resultado = parseInt(uno) / parseInt(dos);
						$('#resultado').html(resultado);
					} else if (operation === "*") {
						var resultado = parseInt(uno) * parseInt(dos);
						$('#resultado').html(resultado);
					}
				})		
		})
});

 //Creado por Mauricio Ospina - Yeivison Mauricio