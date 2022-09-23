//https://leetcode.com/problems/two-sum/
//Easy

var isPalindrome = function(x) {
    let string = x.toString()
    let arr = string.split(" ")
    arr = arr.join("")
    console.log(arr)
    let pali = []
    let length = string.length - 1;
    
    for(let i = length; i >= 0; i--) {
        
        console.log(arr[i])
        pali.push(arr[i])
        
    }

    pali = pali.join('')

    if(pali == x){
        return true;
    }else{
        return false;
    }
};

    


console.log(isPalindrome(121))