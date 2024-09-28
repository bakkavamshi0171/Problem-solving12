alpha =65; 
rows =5;
for (i=1;i<=rows;i++){
    res =" ",res1 = " "
    for(k=1;k<=rows-i;k++){
        res = res + "  "
    }
    for(j=1;j<=i;j++){
       res1 = String.fromCharCode(alpha) +" "+ res1 ;
       alpha++
    }
    console.log(res + res1)
}
// output :        
//         A  
//       C B
//     F E D
//   J I H G
// O N M L K


rows= 7
for(i=0;i<rows;i++){
   res ="", alpha= 65;
    for(j=rows;j>i;j--){
        res=res+String.fromCharCode(alpha);
        alpha++
    }
    for(k=1; k<=i;k++){
        res = res+ " "
    }
    res1=" ";
    for(m of res){
        res1 = m + res1
    }
    console.log(res + res1);
    
}
// output : 
// ABCDEFGGFEDCBA 
// ABCDEF  FEDCBA
// ABCDE    EDCBA
// ABCD      DCBA
// ABC        CBA
// AB          BA
// A            A