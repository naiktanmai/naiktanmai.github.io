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
    ],
    technologies: [
      {
        key: 0,
        icon: "devicon-nodejs-plain colored",
        name: "Node.js"
      },
      {
        key: 1,
        icon: "devicon-go-plain colored",
        name: "Go lang"
      },
      {
        key: 2,
        icon: "devicon-python-plain colored",
        name: "Python",
        description: "Python"
      },
      {
        key: 3,
        icon: "devicon-react-original colored",
        name: "React.js"
      },
      {
        key: 4,
        icon: "devicon-mongodb-plain colored",
        name: "MongoDB"
      },
      {
        key: 5,
        icon: "devicon-postgresql-plain colored",
        name: "Postgresql"
      },
      {
        key: 6,
        icon: "devicon-docker-plain colored",
        name: "Docker"
      },
      {
        key: 7,
        icon: "devicon-redis-plain colored",
        name: "Redis"
      },
      {
        key: 8,
        icon: "devicon-mysql-plain colored",
        name: "SQL"
      },
      {
        key: 9,
        icon: "devicon-git-plain colored",
        name: "Git"
      },
      {
        key: 10,
        icon: "devicon-nginx-original colored",
        name: "Nginx"
      },
      {
        key: 11,
        icon: "devicon-javascript-plain colored",
        name: "Javascript"
      }
    ],
    footer: [
      {
        key: 0,
        icon: "fa-twitter",
        text: "Twitter",
        link: "https://twitter.com/tanthedestroyer"
      },
      {
        key: 1,
        icon: "fa-github",
        text: "Github",
        link: "https://github.com/naiktanmai"
      },
      {
        key: 2,
        icon: "fa-linkedin",
        text: "linkedIn",
        link: "https://www.linkedin.com/in/tanmai-naik-06376454/"
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Header links={this.state.links} />
        <Banner />
        <Project projects={this.state.projects} />
        <Technology technologies={this.state.technologies} />
        <Footer links={this.state.footer} />
      </React.Fragment>
    );
  }
}

export default App;
