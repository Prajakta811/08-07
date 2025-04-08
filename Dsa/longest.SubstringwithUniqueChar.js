var lengthOfLongestSubstring = function(s) {
    let longest=0
    let str=[]
    for(let i=0;i<s.length;i++)
    {
      let count=0
      for(let j=i;j<s.length;j++)
      {
        if(!str.includes(s[j]))
        {
          count++
          str.push(s[j])
        }
        else
        {
          for(let k=0;k<j;k++)
          {
            str.pop()
          }
          break
        }
      }
      longest=Math.max(longest,count)
    }
    console.log(longest)
   };
   lengthOfLongestSubstring("abcabcab")