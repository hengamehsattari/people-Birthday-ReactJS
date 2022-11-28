import { Component } from "react";
import person from "./data";
import Birthday from "./Birthday";

class App extends Component {
  state = { person: person };

  clearData = () => {
    this.setState({ person: [] });
  };
  render() {
    const {person}=this.state;
    return (
      <main>
        <section className="container">
          <div className="title">
            <h1>Let's Celebrate</h1>
            <div className="underline"></div>
          </div>
          <h2>{person.length} person's birthday is today</h2>
          <Birthday person={person} />
          {person.length>0 && (<button onClick={this.clearData}>clear All</button>)}
        </section>
      </main>
    );
  }
}
export default App;
