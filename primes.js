function primes(n){
		var primes = {}
		  for(let i = 2; i < n; i++){
			    	primes[i] = true
						}
		    
		    for(let i = 2; i * i <= n; i++){
			      	if(primes[i] === true){
					    	
					      var k = 0;
					          	for(let j = i * 2; j < n; j = i * 2 +  i * k){
								      	primes[j] = false
										      	k++
														}
									}
				  }
		      
		      var set = []
			        for(let p in primes){
					  	console.log(p)
							   if(primes[p] == true){
								        set.push(p)
										   }
						  }
		        return set
				 }
 
var n = 510
var result = document.getElementById('result')
var header = document.getElementsByTagName("h1")[0]

header.innerHTML = `All primes less than ${n}`
result.innerHTML = JSON.stringify(primes(n), undefined, 2)
	 
