function TruncateIt(str,maxLength){
    if(str.length < maxLength){
        return str;
    }
    else{       
        return (str.slice(0,maxLength)+"...")        
    }
}

console.log(TruncateIt("This is crazy js", 10))