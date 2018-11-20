import React, { Component } from "react";
import Article from "./article";

class Project extends Component {
  render() {
    return (
      <section id="one" className="wrapper">
        <div className="inner">
          <div className="flex flex-3">
            {this.props.projects.map(project => {
              return <Article key={project.key} {...project} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
