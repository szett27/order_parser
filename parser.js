//Parsing the Data to isolate text we want

//First find tasks for all components and then AFCENT

//Make text into giant string => array, then eliminate all text before all components

//TDD 
//1) Test should return string array with size > 0;


//For Each element in the array stop when you see 'All Components', if not keep searching until you see 'AFCENT'

//If All components gett all text into an all components array that ends on a double carriage return

//Continue searching document until you see 'AFCENT', turn all text into an AFCENT array that ends on a double carriage return

//return two arrays which are arguments for the next csv parser -> save arrays as csv files.
let sampleText = 'This is a sample.\n\n'+'1.1 All Components\n' + '1.1. Must do X\n\n' + '1.2 AFCENT';

let TransformText = (text) => {
    let All_Components = [];
    let AFCENT = [];

    let total_text = text.split('\n');

    //cut all unneeded text from the array
    for(var i = 0; i < total_text.length -1; i++){
        //search through each line
            if(total_text[i].includes('All Components')){
                total_text.splice(0, i)
                break;
            }
        }

    //push all components into All Components Array
    for(var i =0; i < total_text.length; i++){
            if(total_text[i].includes('AFCENT')){
                AFCENT = total_text.splice(i-1, total_text.length);
                console.log(AFCENT)
                All_Components = total_text.splice(0, i-1);
                console.log(All_Components)
                break;
            }
        }



    // //two for loops, not great time/space complexity, grows with text
    // total_text.forEach(element => {
    //     if(element === 'AFCENT'){
    //         while(element.split('').indexOf('\n\n') !== -1){
    //             AFCENT.push(total_text[element + 1]);
    //         }
    //     }
    
    // });

    return([All_Components, AFCENT])
}

TransformText(sampleText)