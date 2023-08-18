//(5) Calculate tax on salary - 
     // case 1 : if salary less than 45000/month, then tax will be 5% of the salary 
     // case 2 : if salary greater than 45000/month, then tax will be 5% upto 45000 then 10% on remaining amount    

    var salary= 50000
    //  remainingAm= salary-45000
    //  division_10 = remainingAm/100
    //  greaterThen_10 = division_10*10

    //   division_5= salary/100 
    //   lessThen_5= division_5*5

    //   greater_total= lessThen_5+greaterThen_10

      if(salary<=45000){ 
        console.log("tax will be 5% of the salary")

      }else{ 
        console.log("tax will be 5% upto 45000 then 10% on remaining amount")
      }



    //  console.log(greater_total)


     