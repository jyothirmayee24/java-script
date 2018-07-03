function calculateSupply(currentAge,snackPack_perDay)
{
var  maxAge=60;
var total=365*snackPack_perDay*(maxAge-currentAge);
console.log("You will need "+total+" to last you until the ripe old age of "+maxAge);
}
calculateSupply(12,1);
calculateSupply(40,1);
calculateSupply(20,2);