import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Badge from "react-bootstrap/Badge";

const App = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);

  const hash = window?.location?.hash?.substr(1);
  const [page, setPage] = React.useState(hash);

  window.onhashchange = function () {
    const hash = window?.location?.hash?.substr(1);
    setPage(hash);
  };

  const renderBody = () => {
    if (page === "about-author") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">About the Author</h3>
            <p>
              Faith Pellas is a graduate student of Teaching English to Speakers
              of Other Languages (TESOL) at the University of San Francisco.
              This project was born out of the necessity to provide ESL and EFL
              teachers a guide on teaching pronunciation.
            </p>
          </div>
        </div>
      );
    }

    if (page === "letter-teachers") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Letter to Teachers</h3>
            <p>Description of how to use the website</p>
          </div>
        </div>
      );
    }

    if (page === "phonemes") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">26 Letters, 44 Phonemes</h3>
            <div>
              There are 26 letters in the English alphabet. These letters are
              divided into two categories:{" "}
              <a
                className="clickable-page"
                href="#vowels"
                onClick={() => setPage("vowels")}
              >
                vowels
              </a>{" "}
              and{" "}
              <a
                className="clickable-page"
                href="#consonants"
                onClick={() => setPage("consonants")}
              >
                consonants
              </a>
              .
            </div>
          </div>
        </div>
      );
    }

    if (page === "vowels") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Vowels</h3>
            <ul>
              <li>Vowels: A, E, I, O, U</li>
              <li>19 Vowel Sounds</li>
              <li>6 Short Vowels</li>
              <li>6 Long Vowels</li>
              <li>R-Controlled Vowels</li>
              <li>2 Dipthongs</li>
            </ul>
          </div>
        </div>
      );
    }

    if (page === "consonants") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Consonants</h3>
            <p>TBD</p>
            <figure className="left">
              <figcaption>Listen to the T-Rex:</figcaption>
              <audio
                controls
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
              >
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
            <figure className="left">
              <figcaption>Flower example (hosted video):</figcaption>
              <video controls width="500">
                <source
                  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                  type="video/webm"
                />
                <source
                  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </figure>
            <figure className="left">
              <figcaption>Another example (from YouTube):</figcaption>
              <iframe
                title="video-youtube"
                width="500"
                height="315"
                src="https://www.youtube.com/embed/FzA26s8k3nQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </figure>
          </div>
        </div>
      );
    }

    if (page === "quizz") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Quizz</h3>
            <p>TBD</p>
          </div>
        </div>
      );
    }

    const renderFake = () => (
      <div className="article">
        <h3 className="h3-title">Something else</h3>
        <p>Another one</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>One paragraph</p>
      </div>
    );

    return (
      <>
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">
              Something <Badge variant="secondary">New</Badge>
            </h3>
            <p>One paragraph</p>
            <p>Another one</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          {renderFake()}
          {renderFake()}
        </div>
        <div className="block-1">
          <div className="section">
            <h3 className="h3-title">Some section</h3>
            <p>Short description</p>
            <p>One paragraph</p>
          </div>
          <div className="section">
            <h3 className="h3-title">Some other section</h3>
            <p>Very short description</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <HelmetProvider>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        data-cross-origin="anonymous"
      />
      <Helmet>
        <title>Faith Pellas</title>
        <link rel="canonical" href="https://sebranly.github.io/" />
      </Helmet>
      <div className="main">
        <h1 className="h1-title">Faith Pellas</h1>
        <h2 className="h2-title">Pronunciation</h2>
        <Navbar className="navbar" bg="dark" variant="dark">
          <Dropdown
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onToggle={() => setIsClicked(!isClicked)}
            show={isClicked || isHovered}
          >
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              About
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#about-author"
                onClick={() => setPage("about-author")}
              >
                About the Author
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setPage("letter-teachers")}
                href="#letter-teachers"
              >
                Letter to Teachers
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav className="mr-auto">
            <Nav.Link href="#phonemes" onClick={() => setPage("phonemes")}>
              Phonemes
            </Nav.Link>
            <Nav.Link href="#stress" onClick={() => setPage("stress")}>
              Stress
            </Nav.Link>
            <Nav.Link href="#intonation" onClick={() => setPage("intonation")}>
              Intonation
            </Nav.Link>
            <Nav.Link href="#resources" onClick={() => setPage("resources")}>
              Resources
            </Nav.Link>
            <Nav.Link href="#quizz" onClick={() => setPage("quizz")}>
              Quizz
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <div className="body">{renderBody()}</div>
        {/* <div className="footer">Created in 2020</div> */}
      </div>
    </HelmetProvider>
  );
};

export default App;
