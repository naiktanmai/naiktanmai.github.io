import React, { Component } from "react";
import Header from "./components/header/header.jsx";
import Banner from "./components/banner/banner.jsx";
import Project from "./components/project/project.jsx";
import Technology from "./components/technology/technology.jsx";
import Footer from "./components/footer/footer.jsx";

class App extends Component {
  state = {
    links: [
      {
        key: 0,
        href: "#",
        text: "Home"
      },
      {
        key: 1,
        href: "#",
        text: "Profile"
      },
      {
        key: 3,
        href: "#",
        text: "Work"
      }
    ],
    projects: [
      {
        key: 0,
        contentText:
          "American Water Resources covers repairs to most of the major systems usually not covered by your homeowners insurance.",
        moreInfoLink: "",
        headerText: {
          header: "awrusa.com",
          description: "Ecommerce for coverages"
        }
      },
      {
        key: 1,
        contentText:
          "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, <br/> magna a ullamcorper laoreet, lectus arcu.",
        moreInfoLink: "",
        headerText: {
          header: "awrusa.com",
          description: "Ecommerce for coverages"
        }
      },
      {
        key: 2,
        contentText:
          "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, <br/> magna a ullamcorper laoreet, lectus arcu.",
        moreInfoLink: "",
        headerText: {
          header: "awrusa.com",
          description: "Ecommerce for coverages"
        }
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Header links={this.state.links} />
        <Banner />
        <Project projects={this.state.projects} />
        <Technology />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
