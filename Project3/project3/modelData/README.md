# CSE4050 Project3 Model Data

Since we don't have a backend database system to fetch model data from yet we stuff the model
data into the DOM so it will be accessible to the views.  We add an object
property named `cse4050models` to the DOM that contains the model data for the different views.

* `cse4050models.exampleModel()` - The model for the problem 1 - example view.
* `cse4050models.coursesModel()`  - The model for the problem 2 - states view.

These models can be accessed from the React controller of the view under the window property.
For example:

    window.cse4050models.coursesModel()

will access the problem2 courses array so:

    window.cse4050models.coursesModel()[0] === 'CSE 1100	Critical Thinking Through Computer Programming'
