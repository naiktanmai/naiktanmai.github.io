import React, { Component } from "react";
import TechnologyHeader from "./technologyheader";
import Practice from "./practice";

class Technology extends Component {
  render() {
    const { technologies } = this.props;

    return (
      <section id="two" className="wrapper style1 special">
        <div className="inner">
          <TechnologyHeader />
          <div className="flex flex-4">
            {technologies.map(technology => {
              return <Practice key={technology.key} {...technology} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Technology;
