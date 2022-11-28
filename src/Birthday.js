import { Component } from "react";
class Birthday extends Component {
    
    
  render() {
    const { person } = this.props;
   
    return (
        <div>
            {person.map((item)=>{
                const {id,name,age}=item
                return (
                  <>
                    
                    <ul key={id}>
                      <li>
                        {name} {age} years old
                      </li>
                    </ul>
                   
                  </>
                );

             })}

        </div>


    );
  }
}
export default Birthday;
