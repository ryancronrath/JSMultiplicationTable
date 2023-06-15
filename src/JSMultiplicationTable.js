"use strict";

export class MultiplicationTable {
    constructor(table){
        this.table = table;

        // Draw the first row 1-12
        _drawHeader(table);

        for (var i=2; i < 13; i++){
            _drawRow(table, i);
        }      
    }

    ResetTable(){

        // Find all inputs in the table and remove any class values and set the value to empty.

        var inputs = this.table.querySelectorAll('input');

        inputs.forEach((input) => {
            input.value = '';
            input.classList = '';
        });
    }
}

function _drawRow(table, factor){

    // create a table row element
    var row = document.createElement('tr');

    // For each number (1-12) in a row
    for (var i=0; i < 12; i++){

        // create a cell
        var cell = document.createElement('td');
        
        if (i == 0){   
            // If this is the first cell just display the value
            // This is factor of 1.        
            cell.innerHTML = (i+1) * factor;
        }
        else{
            // Create an input
            var input = document.createElement('input');
            input.type = 'text';

            // Set the inputs data-cellvalue attribute to the correct factor value
            input.dataset.cellvalue = (i+1) * factor;

            // Create an blur event (on-leave) for the input
            input.addEventListener('blur', function (e){
                e.preventDefault();
              
                if (e.target.value !== ''){
                    
                    // An input value exists
                    if (e.target.value === e.target.dataset.cellvalue){

                        // The input value is the correct factor value
                        // Change the background color to green
                        e.target.classList = 'correct';
                    }
                    else{
                        // the input value is not the correct factor value
                        // Change the background color to red.
                        e.target.classList = 'incorrect';
                    }
                }
                else{
                    // Remove any stylings that exist
                    e.target.classList = '';
                }

            });

            // Add the input to the cell.
            cell.appendChild(input);
        }

        // Add the cell to the row.
        row.appendChild(cell);
           
    }

    // Add the row to the table.
    table.appendChild(row);

}

function _drawHeader(table){

    // This creates the first row, factor of 1, values
    var row = document.createElement('tr');
    for (var i=0; i < 12; i++){
        var cell = document.createElement('td');
        cell.innerHTML = i+1

        cell.dataset.cellvalue = i+1;
        row.appendChild(cell);        
    }
    table.appendChild(row);

}