// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var obj = {};
	var str1 = {error: "You are rich, my friend! We don't have so much coins for exchange"};
	var str2 = {};
	var str = '{';
	k = 5;
    if ( currency > 10000 )
	{
		return str1;
	}
	if ( currency <= 0 )
	{
		return str2;
	}
	else{
		obj.H = Math.floor(currency/50);
		obj.Q = Math.floor(currency%50/25);
		obj.D = Math.floor(currency%50%25/10);
		obj.N = Math.floor(currency%50%25%10/5);
		obj.P = Math.floor(currency%50%25%10%5);
	}
		if(obj.H === 0)
		{
			delete obj.H;
			k--;
		}
		if(obj.Q === 0)
		{
			delete obj.Q;
			k--;
		}
		if(obj.D === 0)
		{
			delete obj.D;
			k--;
		}
		if(obj.N === 0)
		{
			delete obj.N;
			k--;
		}
		if(obj.P === 0)
		{
			delete obj.P;
			k--;
		}
	return obj;
	
		
}
