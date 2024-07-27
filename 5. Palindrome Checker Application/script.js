document.querySelector('#check-btn').addEventListener('click',PalindromeChecker);


function PalindromeChecker(){
    const str = document.querySelector('#input');
    let result = document.querySelector('#result');

    if(isPalindrome(str.value)){
        result.textContent = `"${str.value}" is Palindrome`;
    }
    else{
        result.textContent = `"${str.value}" is not Palindrome`;
    }
}

function isPalindrome(str){
    const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanstr);
    const reversestr = cleanstr.split('').reverse().join('');

    return cleanstr===reversestr;
}