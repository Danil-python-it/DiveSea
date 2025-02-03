import React from "react"
import axios from 'axios'

class Geek extends React.Component{
    state = {details: [],}
  
    componentDidMount(){
      let data;
      axios.get('http://localhost:8000/geek/')
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
          <header>Geek Data</header>
          <hr />
          {this.state.details.map((output,id) => (
            <div key={id}>
              <h2>{output.title}</h2>
              <p>{output.description}</p>
            </div>
          ))}
        </div>
      )
    }
  }
  
  
  export default Geek