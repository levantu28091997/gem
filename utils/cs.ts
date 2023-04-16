/**
 * A helper function to convert an array of css modules to a string
 * @param arr (array of css module strings)
 */

function cs(arr:any) {
    return arr.filter((e:any) => e).join(' ')
}

export default cs
