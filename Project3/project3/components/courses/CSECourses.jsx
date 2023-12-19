import React from 'react';
import './CSECourses.css';

/**
 * Define Courses, a React componment of cse4050 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cse4050models.coursesModel().
 */
class CSECourses extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.cse4050models.coursesModel()', window.cse4050models.coursesModel());

    this.state = {
      initialValue: '',
    };

    this.handleChangeBound = event => this.handleChange(event);
  }

    handleChange (event) {
      let input = event.target.value;
      input = new RegExp(event.target.value, 'gi');
      const noTabsArr = window.cse4050models.coursesModel().map(e => e.replace(/\t/g, ' '));
      const arr = noTabsArr.filter((word) => (word.match(input) ? true : false));
      document.getElementById('results').innerHTML = arr.length > 0 ? arr.join('<p></p>') : 'No Result';
      this.setState({initialValue: event.target.value});
    }  

    render() {
      return (
        <div className='cse4050-prob2-styling'>
          <label htmlFor='courses'>Type a CSE Course: </label>
          <input id='courses' type='text' value={this.state.initialValue} onChange={this.handleChangeBound}></input>
          <div>
            <p>Results:</p>
            <div id='results'>{window.cse4050models.coursesModel().map(e => <p key={e}>{e}</p>)}</div>
          </div>
        </div>
    );
  }
}

export default CSECourses;