//parse js arrays to cs


let test_arr = [['1.1 All Components', '1.2 Do this'], ['1.2 AFCENT', '1.3 Move Stuff here']];

let csv_parser = (arr1) =>{

    console.log(test_arr)
    var fs = require('fs');

    var file = fs.createWriteStream('order.csv');
    file.on('error', function(err) { /* error handling */ });
    test_arr.forEach(function(v) {
        console.log(v)
         file.write(v.join(', ') + '\n'); 
        
        });

    file.end();

}


csv_parser(test_arr);


