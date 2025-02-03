import React from "react"
import axios from 'axios'

class Lead extends React.Component{
    state = {details: [],}
  
    componentDidMount(){
      let data;
      axios.get('http://localhost:8000/lead/')
      .then(res => {
        data = res.data;
        this.setState({
          details:data
        });
      })
      .catch(err => {
        console.log(err);
      })
    }
    render(){
      return(
        <div className="">
          <header>Lead data</header>
          <hr />
          {this.state.details.map((output,id) => (
            <div key={id}>
              <h2>{output.name}</h2>
              <p>{output.email}</p>
              <p>{output.message}</p>
            </div>
          ))}
        </div>
      )
    }
  }
  
  
  export default Lead