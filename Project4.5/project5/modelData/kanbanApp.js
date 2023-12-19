'use strict';

/*
 * Load the model data of the problem 2 of CSE4050's project5.
 * We load into the property cse4050models.taskModel
 *
 */

(function() {

  var tasks = [
      {"_id":"1", "type_id":"1", "description":"Study javascript"},
      {"_id":"2", "type_id":"2", "description":"Study JSON"},
      {"_id":"3", "type_id":"3", "description":"Study HTML"},
      {"_id":"4", "type_id":"3", "description":"Study CSS"},
      {"_id":"5", "type_id":"2", "description":"Study Material-UI"},
    ];

  var taskTypes = [
       {"_id":"1", 'name':'New','class':'new','color':'warning.main'},
       {"_id":"2", 'name':'In Progress','class':'inprogress','color':'info.main'},
       {"_id":"3", 'name':'Done','class':'done','color':'success.main'}
     ];

  var taskListModel = function() {
     return tasks;
  };

  var taskTypeListModel = function() {
     return taskTypes;
  };


  var cse4050models =  {
     taskListModel: taskListModel,
     taskTypeListModel: taskTypeListModel
  };

  if( typeof exports !== 'undefined' ) {
     // We're being loaded by the Node.js module loader ('require') so we use its
     // conventions of returning the object in exports.
     exports.cse4050models = cse4050models;
  } else {
     // We're not in the Note.js module loader so we assume we're being loaded
     // by the browser into the DOM.
     window.cse4050models = cse4050models;
  }

})()
