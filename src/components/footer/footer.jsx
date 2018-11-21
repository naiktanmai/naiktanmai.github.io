import React, { Component } from "react";
import Link from "./link";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  componentDidMount() {
    this.fetchFooterLinks().then(data => {
      this.setState({ links: data });
    });
  }

  fetchFooterLinks = async () => {
    let footer = await fetch(
      "https://profile-tanmai.firebaseio.com/footer.json"
    );
    return footer.json();
  };

  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <div className="flex">
            <div className="copyright">
              &copy; https://templated.co/theory. Images:{" "}
              <a href="https://unsplash.com">Unsplash</a>.
            </div>
            <ul className="icons">
              {this.state.links.map(link => {
                return <Link {...link} />;
              })}
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
