//(5) Calculate tax on salary - 
     // case 1 : if salary less than 45000/month, then tax will be 5% of the salary 
     // case 2 : if salary greater than 45000/month, then tax will be 5% upto 45000 then 10% on remaining amount    

     var salary = 70000
     var remaining_amount= salary-45000

     var case_1 = salary/100*5  //case 1 ka interset nikal raha hai


     var interest_10= remaining_amount/100*10 // 10% nikal gaya

     var interest_case5 = 45000/100*5    //case 2 ka interset nikal raha hai 5%
     var case_2 = interest_10+interest_case5

//  if(salary<=45000){
//  console.log("salary tax will be 5% are" , interest_case1)
// } else{ 
//     console.log("then tax will be 5% upto 45000 then total tax are",interest_case2 )
// }
if(salary<=45000){ 
     console.log(case_1 ,"will be taxed at 5% of the salary of",salary)
}else{ 
     console.log("Out of ",salary,"rs salary, 45000rs  will be taxed at 5% and remaining amount will be taxed at 10%, total",case_2,"will be taxed")
}

     