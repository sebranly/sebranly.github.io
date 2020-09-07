import * as React from "react";
import "./App.css";
import classnames from "classnames";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      <Helmet>
        <title>Sebastien</title>
        <link rel="canonical" href="https://sebranly.github.io/" />
      </Helmet>
      <div className="main">
        <h1>Sebastien</h1>
        <h2>Programming</h2>
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
