function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash + str.charCodeAt(i) * (i + 1)) % 1000;
    }
    return hash;
  }

  console.log(simpleHash(0));    
  console.log(simpleHash(1));   

//   for(let i=0;i<1000000;i++){
//     for(let j=0;j<1000000;j++){
//         if(simpleHash(i) === simpleHash(j)){
//             console.log(i,j);
//         }
//     }
//   }
    

