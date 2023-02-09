let a="naman";
let palindrome="";
for(let i=a.length-1;i>=0;i++)
{
    palindrome+=a[i];
}
if(palindrome==a)
{
    console.log("yes");
}
else{
    console.log("no");
}