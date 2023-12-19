'use strict';

/*
 * Load the model data of the problem 1 of cse4050's project3.
 * We load into DOM the property cse4050models.exampleModel a function that returns an object
 * with the following property:
 *    name:  A string with name.
 *
 * See README.md for information on how to access it.
 */
var cse4050models;

if (cse4050models === undefined) {
   cse4050models = {};
}

cse4050models.exampleModel = function() {
   return {
      name: 'Hector Najera',
      motto: 'We Define the Future',
   };
};
