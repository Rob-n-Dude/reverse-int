module.exports = function reverse (n) {
    if(n < 0)
    {
        n*=-1
    }
    n = n.toString()
    result = ""
    for (let i = n.length-1; i >= 0; i--){
        result += n[i]
    }
    return result
  
}
