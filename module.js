exports.add = function (a,b){
    return subtract(a+b*2,b);
};

subtract = function(c,d){
    return exports.myDateTime();
    // return c-d;
}

exports.myDateTime = function () {
    var currentdate = new Date(); 
    var datetime = "Current Time: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    return datetime;
  };

// 1. return subtract(a+b*2,b);
//      1. subtract -> function(c,d)
//      2. c = a+b er value, d = 2*b er value
//      2. return myDateTime();
//          1. var currentdate = new Date(); 
//          2. var datetime = "Current Time: " + currentdate.getDate() + "/"
//                              + (currentdate.getMonth()+1)  + "/" 
//                              + currentdate.getFullYear() + " @ "  
//                              + currentdate.getHours() + ":"  
//                              + currentdate.getMinutes() + ":" 
//                              + currentdate.getSeconds();
//          3. var datetime = "Current Time: " + 10 + "/"
//                              + (06+1)  + "/" 
//                              + currentdate.getFullYear() + " @ "  
//                              + currentdate.getHours() + ":"  
//                              + currentdate.getMinutes() + ":" 
//                              + currentdate.getSeconds();
//          4. var datetime = "Current Time: " + 10 + "/"
//                              + (7)  + "/" 
//                              + currentdate.getFullYear() + " @ "  
//                              + currentdate.getHours() + ":"  
//                              + currentdate.getMinutes() + ":" 
//                              + currentdate.getSeconds();
//          5. var datetime = "Current Time: " + 10 + "/"
//                              + 7  + "/" 
//                              + 2021 + " @ "  
//                              + currentdate.getHours() + ":"  
//                              + currentdate.getMinutes() + ":" 
//                              + currentdate.getSeconds();
//          6. var datetime = "Current Time: " + 10 + "/"
//                              + 07  + "/" 
//                              + 2021 + " @ "  
//                              + 12 + ":"  
//                              + currentdate.getMinutes() + ":" 
//                              + currentdate.getSeconds();
//          7. var datetime = "Current Time: " + 10 + "/"
//                              + 7  + "/" 
//                              + 2021 + " @ "  
//                              + 12 + ":"  
//                              + 47 + ":" 
//                              + currentdate.getSeconds();
//          8. var datetime = "Current Time: " + 10 + "/"
//                              + 7  + "/" 
//                              + 2021 + " @ "  
//                              + 12 + ":"  
//                              + 47 + ":" 
//                              + 52;
//          8. var datetime = "Current Time: " + 10 + "/"+ 7  + "/" + 2021 + " @ " + 12 + ":"  + 47 + ":" + 52;
//          9. var datetime = "Current Time: 10 / 7/ 2021  @ 12:47 : 52";
//          10. return datetime;
//          11. return  "Current Time: 10 / 7/ 2021  @ 12:47 : 52";
//      2. return "Current Time: 10 / 7/ 2021  @ 12:47 : 52";
//  2. return "Current Time: 10 / 7/ 2021  @ 12:47 : 52";