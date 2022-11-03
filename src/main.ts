// Algoritms in leedCode site
/*
*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSum = function(nums : number[], target : number) : number[] | string {
        let j=0;
        while( j <= nums.length){
             for(let i =1 ; i<=nums.length; i++){
            if(j != i && nums[j]  + nums[i] == target){
                return [j, i]
            }
          };
         j++;
        }    
    return "Dont found suitable values of the array"
};


/*
Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left. 
*/

var  isPalindrome = function(x : number) : boolean {
    let s = x.toString();
    for(let i = 0; i < s.length/2; i++ ){
        if(s[i]!==s[s.length-1-i]){
            return false
        }        
    }
    return true
    
};

