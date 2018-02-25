module.exports = function check(str, bracketsConfig) {
 	var array = str.split('');
	if(array.length % 2 != 0){
		return false;
	}
	var check_count = 0;
	var check_count_para = 0;
	
	for(var i = 0; i < array.length; i++){
		if(array[i] == '('){
			check_count++;
			console.log( 'check_count:  ', check_count)
		}
	}
	console.log(array);
		
	for(var j = 0; j < array.length; j++){
		if(array[j] == ')'){
			check_count_para++;
			console.log('check_count_para:  ' + check_count_para);
		}
	}
		
		if(check_count == check_count_para){
			return true;
		} else return false;
	
	
	
}