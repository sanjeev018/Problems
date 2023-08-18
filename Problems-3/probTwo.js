//(2) Wap  to check triangle is valid or not if it's 3 sides are given .[sum of any two sides must be greater than third one] . 
// a+b>c b+c>a a+c>b

var traingle_a= 50
var traingle_b= 60
var traingle_c= 40

var ab= traingle_a+traingle_b
var bc= traingle_b+traingle_c
var ac= traingle_a+traingle_c

if(ab>traingle_c && bc>traingle_c && ac>traingle_b){ 
    console.log("traingle is valid")
}else{ 
    console.log("traingle is not valid")
}