import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import History from './../History/History';
import Contact from './../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'>
            <h3>About</h3>
          </Link>
          <Link to='/about/history' className='subnav_links'>
            <h3>History</h3>
          </Link>
          <Link to='/about/contact' className='subnav_links'>
            <h3>Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History} />
            <Route path='/about/contact' component={Contact} />
            <Route exact path='/about' render={() => (
              <div>
                <h1>About the University</h1>
                <p>
                  Gev sidious bollux bespin. Neimoidian dunwell maul malastare jade bib xanatos kalarba. Ferroans tharen ulic teneniel jar dunwell maul. Iv beru cerea jan fett mirta omas. Fel tsavong amedda antilles. Raa luuke dooku axmis carnor. Allana theelin rancisis mothma jacen plo dunhausen massassi terrik. Darpa rhen jawa gamorr organa md-5 antilles trandoshan. Vestara cody kastolar bardan feeorin. Darth til x1 skywalker darth tatooine gordin twi'lek. Hutt stele conan ugnaught jerec altyr gungan derlin. Cognus conan sneevel darth droid.
                </p>
              </div>
            )} />
          </Switch>
        </div>
      </div>
    )
  }
}