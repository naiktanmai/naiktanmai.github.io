import React, { Component } from "react";
import TechnologyHeader from "./technologyheader";
import Practice from "./practice";

class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technologies: []
    };
  }

  componentDidMount() {
    this.fetchTechnologies().then(data => {
      this.setState({ technologies: data });
    });
  }

  fetchTechnologies = async () => {
    let technologies = await fetch(
      "https://profile-tanmai.firebaseio.com/technologies.json"
    );
    return technologies.json();
  };

  render() {
    return (
      <section id="two" className="wrapper style1 special">
        <div className="inner">
          <TechnologyHeader />
          <div className="flex flex-4">
            {this.state.technologies.map(technology => {
              return <Practice key={technology.key} {...technology} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Technology;
