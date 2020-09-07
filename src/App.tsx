import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classnames from "classnames";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const App = () => {
  const [visible, setVisible] = React.useState(false);

  const onMouseOver = () => {
    setVisible(true);
  };

  const onMouseOut = () => {
    setVisible(false);
  };

  const classesSubchoice = classnames("subchoice", {
    hide: !visible,
  });

  const classesSubchoices = classnames("subchoices", {
    hide: !visible,
  });

  return (
    <HelmetProvider>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        data-cross-origin="anonymous"
      />
      <Helmet>
        <title>Sebastien</title>
        <link rel="canonical" href="https://sebranly.github.io/" />
      </Helmet>
      <div className="main">
        <h1>Sebastien</h1>
        <h2>Programming</h2>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <div className="menu">
          <ul className="choices">
            <li
              className="choice-container"
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            >
              <div className="choice">
                <div>Choice 1</div>
                <div className={classesSubchoices}>
                  <div className={classesSubchoice}>Sub-choice 1</div>
                  <div className={classesSubchoice}>Sub-choice 2</div>
                  <div className={classesSubchoice}>Sub-choice 3</div>
                </div>
              </div>
            </li>
            <li className="choice-container">Choice 2</li>
            <li className="choice-container">Choice 3</li>
            <li className="choice-container">Choice 4</li>
          </ul>
        </div>
        <div className="body">
          <div className="block-2">
            <div className="article">
              <h3>Something</h3>
              <p>One paragraph</p>
              <p>Another one</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="article">
              <h3>Something else</h3>
              <p>Another one</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>One paragraph</p>
            </div>
          </div>
          <div className="block-1">
            <div className="section">
              <h3>Some section</h3>
              <p>Short description</p>
              <p>One paragraph</p>
            </div>
            <div className="section">
              <h3>Some other section</h3>
              <p>Very short description</p>
            </div>
          </div>
        </div>
        <div className="footer">Created in 2020</div>
      </div>
    </HelmetProvider>
  );
};

export default App;
