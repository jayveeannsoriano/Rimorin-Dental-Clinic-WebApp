import React, { useState } from 'react'
import moment from 'moment';
import { Button } from 'react-bootstrap';

// class TimeSlotButton{
//   constructor(props) {
//     super(props);
//     this.state = {ClickedButton: ''};
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(id) {

//     this.setState({ClickedButton: id})
//     this.props.selectedtype.bind(this, id)()

//   }

//   render() {

//   return this.props.resumetypes.map((resumetype, selectedtype) => (
//        <input type="button" 
//        className={resumetype.id === this.state.ClickedButton ? "App-Button-Active" : "App-Button-Default"}
//        style={{width: '25%', border: "none"}} 
//        id={resumetype.id} 
//        key={resumetype.id} 
//        value={ resumetype.type} 
//        onClick={ () => this.handleChange(resumetype.id)}/>
//        //onClick={this.props.selectedtype.bind(this, resumetype.id)}/>      

//     ));

//   }
// }

const Timeslot = () => {
  let intime = "09:00 AM"
  let outtime = "05:00 PM"
  const [result, setResult] = useState([])
  console.log("Array", result)

  function intervals(startString, endString) {
    var start = moment(startString, 'hh:mm a');
    var end = moment(endString, 'hh:mm a');
    start.minutes(Math.ceil(start.minutes() / 15) * 15);

    var current = moment(start);

    while (current <= end) {
      if (result.includes(current.format('hh:mm A'))) {
        return null
      }
      else {
        result.push(current.format('hh:mm A'));
        current.add(30, 'minutes'); //minute interval
      }
    }

    return result;
  }

  intervals(intime, outtime);
  return (
    <div className='slots'>
      {
        result && result.length > 0 ? result.map((time, index) => {
          return (
            <div className="timeslot" key={index}>
                <Button className="time">{time}</Button>
            </div>
          )
        }) : null
      }
    </div>
  )
}

export default Timeslot