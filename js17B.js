function getFee(isMember) 
{  
    return (isMember ? '$2.00' : '$10.00');  }  
 console.log(getFee(1));  
// Expected output: "$2.00"   


