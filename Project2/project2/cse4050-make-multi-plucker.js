'use strict';

function Cse4050MakeMultiPlucker(originalArray) {
    const pluckedArray = [];
    const hash = {};
    function arrayPlucker(propertyName, callback) {
        if(arguments.length === 0) {
            return pluckedArray;
        }
        
        if(typeof propertyName === 'string') {
            if(!hash[propertyName]) {
                hash[propertyName] = true;
                const temp = originalArray.reduce((accumulator, e) => { 
                    if (!accumulator.includes(e[propertyName])) {
                        return [...accumulator, e[propertyName]];
                    }
                    return accumulator;
                }, []);

                const obj = {
                    [propertyName]: temp,
                };

                pluckedArray.push(obj);
            }
        }
           
        if(typeof callback === 'function') {
            callback.call(originalArray, pluckedArray);
        }

        return arrayPlucker;
    }

    return arrayPlucker;
}