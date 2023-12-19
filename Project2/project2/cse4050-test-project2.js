'use strict';

/*
 * This file tests the cse4050 Project #2 JavaScript assignment problems. It prints what
 * it finds to the console log and updates the text being displayed in the window with a
 * summary of the results.
 */

/* eslint-env browser, node */
const pMessages = (function() {
// Result message for Problems 1-3
  var p1Message = 'SUCCESS';
  var p2Message = 'SUCCESS';
  var p3Message = 'SUCCESS';

  return {
    p1Message,
    p2Message,
    p3Message,
  };

}());

// Keep track of all the let statements
const varDeclared = ['varDeclared', 'p1Message', 'p2Message', 'p3Message'];

// Utility functions
function arraysAreTheSame(a1, a2) {
  if (!Array.isArray(a1) || !Array.isArray(a2) || (a1.length !== a2.length)) {
    return false;
  }
  for (let i = 0; i < a1.length; i += 1) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
}

// ********************* Test cse4050MakeMultiPlucker  *****************************

if (typeof Cse4050MakeMultiPlucker !== 'function') {
  console.error('Cse4050MakeMultiPlucker is not a function', typeof Cse4050MakeMultiPlucker);
  pMessages.p1Message = 'FAILURE';
} else {
  const originalArray = [
    { id: 1, major: 'Computer Science', level: 'Senior' },
    { id: 2, major: 'Computer Science', level: 'Junior' },
    { id: 3, major: 'Computer Systems', level: 'Senior' },
    { id: 4, major: 'Computer Systems', level: 'Sophomore' },
  ];
  const pluckerFunc = window.Cse4050MakeMultiPlucker(originalArray);

  if (typeof pluckerFunc !== 'function') {
    console.error('Cse4050MakeMultiPlucker does not return a function', pluckerFunc);
    pMessages.p1Message = 'FAILURE';
  } else {
    let result = pluckerFunc([]);
    if (typeof result !== 'function') {
      console.error('Plucker function with illegal args does not return a function', result);
      pMessages.p1Message = 'FAILURE';
    }

    let callbackPerformed = false;
    result = pluckerFunc("major", function (callbackResult) {
      callbackPerformed = true;
      if (JSON.stringify([{major: ["Computer Science","Computer Systems"]}]) !== JSON.stringify(callbackResult)) {
        console.error('Plucker function callback does not pluck "major" correctly', callbackResult);
        pMessages.p1Message = 'FAILURE';
      }
      if (!arraysAreTheSame(originalArray, this)) {
        console.error('Plucker function callback does not pass original array as this', this);
        pMessages.p1Message = 'FAILURE';
      }
    });

    if (!callbackPerformed) {
      console.error('Plucker function callback not performed');
      pMessages.p1Message = 'FAILURE';
    }

    if (result !== pluckerFunc) {
      console.error('Plucker function does not return itself', result);
      pMessages.p1Message = 'FAILURE';
    }

    result = pluckerFunc('level');
    if (result !== pluckerFunc) {
      console.error('Plucker function does not return itself 2', result);
      pMessages.p1Message = 'FAILURE';
    }

    result = pluckerFunc();
    if (JSON.stringify([{major: ["Computer Science","Computer Systems"]},{level: ["Senior","Junior","Sophomore"]}]) !== JSON.stringify(result)) {
      console.error('Plucker function callback does not pluck "level" correctly', result);
      pMessages.p1Message = 'FAILURE';
    }

    result = pluckerFunc('level')();
    if (JSON.stringify([{major: ["Computer Science","Computer Systems"]},{level: ["Senior","Junior","Sophomore"]}]) !== JSON.stringify(result)) {
      console.error('Plucker function callback does not check plucked "level" correctly', result);
      pMessages.p1Message = 'FAILURE';
    }

  }
}
console.log('Test Problem 1:', pMessages.p1Message);

// ********************* Test cse4050TemplateProcessor ***************************

if (typeof Cse4050TemplateProcessor !== 'function') {
  console.error('cse4050TemplateProcessor is not a function', typeof cse4050TemplateProcessor);
  pMessages.p2Message = 'FAILURE';
} else {
  const template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
  const dateTemplate = new window.Cse4050TemplateProcessor(template);

  const dictionary = { month: 'July', day: '1', year: '2016' };
  const str = dateTemplate.fillIn(dictionary);

  if (str !== 'My favorite month is July but not the day 1 or the year 2016') {
    console.error('cse4050TemplateProcessor didn\'t work');
    pMessages.p2Message = 'FAILURE';
  }
  varDeclared.push('template');
  varDeclared.push('dateTemplate');
  varDeclared.push('dictionary');
  varDeclared.push('str');
}
console.log('Test Problem 2:', pMessages.p2Message);

// ********************* Test to see if the symbols we defined are in the global address space

varDeclared.forEach(function (sym) {
  if (window[sym] !== undefined) {
    console.error('Found my symbol', sym, 'in DOM');
    pMessages.p3Message = 'FAILURE';
  }
});
console.log('Test Problem 3:', pMessages.p3Message);

// Store the result back into the global space under the object name cse4050Project2Results
window.cse4050Project2Results = {
  p1Message: pMessages.p1Message,
  p2Message: pMessages.p2Message,
  p3Message: pMessages.p3Message,
};

// Once the browser loads our companion HTML in cse4050-test-project2.html we
// update it with the results of our testing. This code will make more
// sense after the next project.
window.onload = function () {
  document.getElementById('cse4050p1').innerHTML = pMessages.p1Message;
  document.getElementById('cse4050p2').innerHTML = pMessages.p2Message;
  document.getElementById('cse4050p3').innerHTML = pMessages.p3Message;

  if(pMessages.p1Message==='SUCCESS') {
    document.getElementById('cse4050p1card').classList.remove('border-danger');
    document.getElementById('cse4050p1card').classList.add('border-success');
    document.getElementById('cse4050p1card').querySelector('.card-header').classList.remove("border-danger","text-bg-danger");
    document.getElementById('cse4050p1card').querySelector('.card-header').classList.add("border-success","text-bg-success");
  }

  if(pMessages.p2Message==='SUCCESS') {
    document.getElementById('cse4050p2card').classList.remove('border-danger');
    document.getElementById('cse4050p2card').classList.add('border-success');
    document.getElementById('cse4050p2card').querySelector('.card-header').classList.remove("border-danger","text-bg-danger");
    document.getElementById('cse4050p2card').querySelector('.card-header').classList.add("border-success","text-bg-success");
  }

  if(pMessages.p3Message==='SUCCESS') {
    document.getElementById('cse4050p3card').classList.remove('border-danger');
    document.getElementById('cse4050p3card').classList.add('border-success');
    document.getElementById('cse4050p3card').querySelector('.card-header').classList.remove("border-danger","text-bg-danger");
    document.getElementById('cse4050p3card').querySelector('.card-header').classList.add("border-success","text-bg-success");
  }
};

