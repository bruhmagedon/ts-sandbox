function removeDuplicates(nums: number[]) {
    const registredNumbers: number[] = []
    let index = 0;
    
    for (let i = 0; i < nums.length; i++ ) {
      if(!registredNumbers.includes(nums[i])) {
        registredNumbers.push(nums[i]);
        nums[index] = nums[i];
        index++;
      }
    }

    nums.length = index; 
    return index;
};


const nums = [0,0,1,1,1,2,2,3,3,4];
const expectedNums = [0,1,2,3,4];
removeDuplicates(nums)
console.log(nums);  
