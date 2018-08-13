jQuery(document).ready(function($){

	//Calculate the volume of a Cylinder

	$('#operation1')
	.on('click',
		function(){
			$('#operation').html('<hr><label for="radius">What is the <b>Radius</b> of the cylindrer?:</label><input type="number" name="radius" placeholder="0.0" class="form-control" id="radius"><label for="height">What is the <b>Height</b> of the cylindrer?:</label><input type="number" name="height" placeholder="0.0" class="form-control" id="height"><button id="calculate" class="btn btn-primary">Calculate</button><div id="result"></div>');

			$('#calculate')
			.on('click',
				function(){
					var radius = $('#radius').val();
					var height = $('#height').val();
					var result = Math.PI*radius*radius*height;

					$('#result').html('<p>The volume of cylindre is: </p>' + result + '.');
				})
		})

	//Conversion of ounces to tons

	$('#operation2')
	.on('click',
		function(){
			$('#operation').html('<hr><label for="ounces">What is the number of <b>Ounces</b> to convert?:</label><input type="number" name="ounces" placeholder="0.0" class="form-control" id="ounces"><button id="calculate" class="btn btn-primary">Calculate</button><div id="result">	</div>');

			$('#calculate')
			.on('click',
				function(){
					var ounces = $('#ounces').val();
					var result2 = ounces * 1 / 35.275 * 1 / 1000 ;

					$('#result').html('<p> ' + ounces + ' Ounces equals ' + '<b>' + result.toFixed(5) + '</b>' + ' tons.</p>');
				})

		})

	//Factorize a number

	$('#operation3')
	.on('click',
		function(){
			$('#operation').html('<hr><label for="number">What number do you want to find the <b>factorial</b>?:</label><input type="number" name="number" placeholder="0.0" class="form-control" id="number"><button id="calculate" class="btn btn-primary">Calculate</button><div id="result"></div>');

			$('#calculate')
			.on('click',
				function(){
					var number = $('#number').val();
					var accumulator = 1;

					for(var meter = 2; meter <= number; meter++) {
						accumulator *= meter;
					}

					$('#result').html('<p>The factorial of ' + '<b>' + number + '</b>' + ' is ' + '<b>' + accumulator + '</b>' + '.</p>')
				})
		})
});