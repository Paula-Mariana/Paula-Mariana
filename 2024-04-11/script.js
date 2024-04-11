function fact (n){
if (n<1) throw new Error ("musst be 1 or greater");
if (n===1) return 1;
return fact (n-1) * n;

} 