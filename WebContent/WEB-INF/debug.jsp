<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Debug</title>
</head>
<body>

<script type = "text/javascript">
function toOneDimension(previousValue, currentValue) {
	return previousValue.concat(currentValue);
	}
	var sampleArrayA = [
	                   [ 'A1', 'A2', 'A3' ],
	                   [ 'B1', 'B2', 'B3' ],
	                   [ 'C1', 'C2', 'C3' ]
	                   ];

	var sampleArrayB = sampleArrayA.reduce(toOneDimension);
	for (var counterVar = 0;
	counterVar<sampleArrayB.length; counterVar++) {
		document.write('sampleArrayB['+counterVar+']:');
		document.write(sampleArrayB[counterVar]);
		document.write('<br/>');
		}
	</script>
	</body>
	</html>
