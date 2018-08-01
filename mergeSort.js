/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers
  
  To read the approach, refer to the class materials at 
  https://btholt.github.io/four-semesters-of-cs/
  
  As always, you can rename describe to be xdescribe to prevent the
  unit tests from running while you're working
  
  There is no visualization mechanism for this algorithm. Use your own
  preferred method of introspection like console.log().
*/

function stitch (arr1, arr2) {
  const result = [];
  while(arr1.length || arr2.length) {
    if(arr1[0] <= arr2[0] || arr2.length === 0) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());   
    }
  }
  return result;
}

function mergeSort(nums) {
  if (nums.length < 2) {
    return nums;
  } 
    const middle = Math.floor(nums.length / 2);
    const a = nums.slice(0, middle);
    const b = nums.slice(middle, nums.length);
    return stitch(mergeSort(a), mergeSort(b))

}



// unit tests
// do not modify the below code
describe('insertion sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    var ans = mergeSort(nums);
    expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});