function arrayRot(arr,d){
    for(let i=0;i<d;i++)
    {
      let start=arr[0]
      for(let j=0;j<arr.length-1;j++)
      {
        arr[j]=arr[j+1]
      }
      arr[arr.length-1]=start
    }
    console.log(arr)
  }
  arrayRot([1,2,3,4,5],2)