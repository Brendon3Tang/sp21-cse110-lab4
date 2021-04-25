// function sumValues(num1, num2, add){
//     if(add){
//         const result = 0;
//         result = num1+num2;
//         console.log('values added: ', result);
//     }
//     else return;

//     console.log('final result: ', result);
// }

//     sumValues(10,10,true);


    // function discountPrices(prices, discount){
    //     const discounted = [];
    //     const length = prices.length;

    //     for (let i = 0; i < length; i++){
    //         const discountedPrice = prices[i] * (1-discount);
    //         //finalPrice = Math.round(discountedPrice*100)/100;
    //         discounted.push(discountedPrice);
    //     }

    //     //console.log(i);
    //     //console.log(length);
    //     //console.log(discountedPrice);
    //     //console.log(finalPrice);
    //     //document.write(i);
    //     document.write(discounted);
    //     return discounted;
    // }

    // discountPrices([100,200,300], 0.5);

    //Question 12
    // var student, i, x = "";
    // student = {
    //     "name":"Sarah",
    //     "num":3,
    //     "sites":[ "Google", "Runoob", "Taobao" ],
    //     'Grad Year': '2022',
    //     "teacher": "Powell",
    //     greeting: function(){console.log('Hello!');},
    //     courseLoad:['CSE 110', 'CSE 134', 'CSE 135']

    // };
    // x = student['Grad Year'];
    // student.greeting();
    // x = student.courseLoad[0];
    

    // Question 17
    // function modifyArray(array, callback){
    //     const newArr = [];
    //     for (let i = 0; i< array.length; i++){
    //         newArr.push(callback(array[i]));
    //     }
    //     document.write[newArr];
    //     return newArr;
    // }

    // function dosomething(num){
    //     return num*2;
    // }

    // modifyArray([1,2,3], dosomething);
    
    //Question 19
    function printNums(){
        console.log(1);
        setTimeout(function(){console.log(2);}, 1000);
        setTimeout(function(){console.log(3);}, 0);
        console.log(4);
    }
    printNums();

    
