import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res => {
        this.setState({students: res.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    const {students} = this.state;
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>Classlist:</h2>
          {students.map((e, i) => (
            <Link to={`/student/${e.id}`} key={i}>
              <h3>{e.first_name} {e.last_name}</h3>
            </Link>
          ))}
          <Link to='/'><button className='back'>Back</button></Link>
      </div>
    )
  }
}