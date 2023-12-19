'use strict';

/*
 * Load the model data of the problem 2 of cse4050's project3.
 * We load into the property cse4050models.coursesModel a function that returns  an array of
 * strings with the names of the states.
 *
 * See README.md for more details
 */

var cse4050models;

if (cse4050models === undefined) {
   cse4050models = {};
}

cse4050models.coursesModel = function() {
   return [
      'CSE1100	Critical Thinking Through Computer Programming',
      'CSE1250	Programming Basics',
      'CSE1290	College Learning for Lives and Careers in the Information Age',
      'CSE2010	Computer Science I',
      'CSE2020	Computer Science II',
      'CSE2130	Machine Organization',
      'CSE3100	Digital Logic',
      'CSE3350	Signals and Systems',
      'CSE3650	Systems Administration I',
      'CSE4010	Contemporary Computer Architecture',
      'CSE4030	Analog Circuit Design and Analysis',
      'CSE4050	Web Application Development',
      'CSE4100	Computer Networking and Security',
      'CSE4310	Algorithm Analysis',
      'CSE4400	Game Design',
      'CSE4550	Software Engineering',
      'CSE4560	Embedded Systems',
      'CSE4600	Operating Systems',
      'CSE4610	Advanced Operating Systems',
      'CSE4820	Senior Project',
      'CSE4880	Ethics Senior Seminar',
      'CSE5000	Introduction to Formal Languages and Automata Theory',
      'CSE5100	Advanced Computer Architecture',
      'CSE5120	Introduction to Artificial Intelligence',
      'CSE5160	Machine Learning',
      'CSE5208	Introduction to Computer Engineering Design',
      'CSE5210	Digital System Design',
      'CSE5250	Parallel Algorithms and Programming',
      'CSE5410	Robotics and Control',
      'CSE5700	Compilers',
      'CSE5720	Database Systems',
      'CSE5750	Internship in Computer Science and Engineering'
   ];
};
