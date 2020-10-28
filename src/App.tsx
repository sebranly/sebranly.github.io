import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import { quiz } from "./quiz";
import Quiz from "react-quiz-component";
import { GiMagnifyingGlass } from "react-icons/gi";
import {
  rColoredVowels,
  longVowels,
  shortVowels,
  diphthongs,
} from "./phonemes";

const App = () => {
  const [isAuthorClicked, setIsAuthorClicked] = React.useState(false);
  const [isAuthorHovered, setIsAuthorHovered] = React.useState(false);
  const [isPhonemesClicked, setIsPhonemesClicked] = React.useState(false);
  const [isPhonemesHovered, setIsPhonemesHovered] = React.useState(false);
  const [emailBody, setEmailBody] = React.useState("");
  const [emailSubject, setEmailSubject] = React.useState("");

  const hash = window?.location?.hash?.substr(1);
  const [page, setPage] = React.useState(hash);

  window.onhashchange = function () {
    const hash = window?.location?.hash?.substr(1);
    setPage(hash);
  };

  const renderTable = (data: any, renderGrapheme = true) => {
    return (
      <table>
        <tr>
          <th>Phoneme</th>
          {renderGrapheme && <th>Grapheme</th>}
          <th>Examples</th>
        </tr>
        {data.map((line: any) => {
          return (
            <tr>
              <td>{line[0]}</td>
              {renderGrapheme && <td>{line[1]}</td>}
              <td dangerouslySetInnerHTML={{ __html: line[2] }} />
            </tr>
          );
        })}
      </table>
    );
  };

  const renderLongVowels = () => {
    return (
      <div className="block-2">
        <div className="article">
          <h3 className="h3-title">6 Long Vowels /ɑ:, i:, u:, ju: , ɜ:, ɔ:/</h3>
          {renderTable(longVowels)}
        </div>
      </div>
    );
  };

  const renderShortVowels = () => {
    return (
      <div className="block-2">
        <div className="article">
          <h3 className="h3-title">6 Short Vowels /æ, ɛ, ɪ, ɑ, ʌ, ʊ/</h3>
          {renderTable(shortVowels)}
        </div>
      </div>
    );
  };

  const renderRColoredVowels = () => {
    return (
      <div className="block-2">
        <div className="article">
          <h3 className="h3-title">R-Colored Vowels</h3>
          {renderTable(rColoredVowels, false)}
        </div>
      </div>
    );
  };

  const renderDiphthongs = () => {
    return (
      <div className="block-2">
        <div className="article">
          <h3 className="h3-title">5 NAE Diphthongs /aɪ, aʊ, eɪ, oʊ, ɔɪ/</h3>
          <h4>(8 in BrE)</h4>
          {renderTable(diphthongs, false)}
        </div>
      </div>
    );
  };

  const renderBody = () => {
    if (page === "about-author") {
      return (
        <div className="anti-flex">
          <div className="block-2">
            <div className="article">
              <h3 className="h3-title">About the Author</h3>
              <p>
                Faith Pellas is an MA TESOL student at the University of San
                Francisco. This project was born out of the necessity to provide
                ESL and EFL teachers a guide on teaching pronunciation.
              </p>
            </div>
          </div>
          <hr />
          <Form className="form">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Email form</Form.Label>
              <Form.Text className="text-muted">
                Or send me a message directly at test@example.com
              </Form.Text>
              <br />
              <Form.Label>Subject</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmailSubject(e.target.value);
                }}
                type="text"
                placeholder="Subject"
              />
              <br />
              <Form.Label>Body</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmailBody(e.target.value);
                }}
                as="textarea"
                rows={10}
                placeholder="Your message"
              />
            </Form.Group>
            <br />
            <Button
              onClick={() => {
                window.open(
                  `mailto:test@example.com?subject=${encodeURIComponent(
                    emailSubject
                  )}&body=${encodeURIComponent(emailBody)}`
                );
              }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
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
          <br />
          <figure className="left">
            <figcaption>
              Sounds of English Vowels and Consonants with phonetic symbols
            </figcaption>
            <iframe
              title="video-youtube"
              width="500"
              height="315"
              src="https://www.youtube.com/embed/JwTDPu2TE6k"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </figure>
          <figure className="left">
            <figcaption>
              ALL OF THE SOUNDS OF ENGLISH | American English Sounds and IPA
              Symbols | Learn English Pronunciation
            </figcaption>
            <iframe
              title="video-youtube"
              width="500"
              height="315"
              src="https://www.youtube.com/embed/yIOOOC0zlmY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </figure>
          <figure className="left">
            <figcaption>
              IELTS Speaking: Pronunciation | THE 44 SOUNDS OF ENGLISH with Jay!
            </figcaption>
            <iframe
              title="video-youtube"
              width="500"
              height="315"
              src="https://www.youtube.com/embed/MXBsy6sKP3Y"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </figure>
        </div>
      );
    }

    if (page === "short-vowels") {
      return renderShortVowels();
    }

    if (page === "long-vowels") {
      return renderLongVowels();
    }

    if (page === "r-colored-vowels") {
      return renderRColoredVowels();
    }

    if (page === "diphthongs") {
      return renderDiphthongs();
    }

    if (page === "vowels") {
      return (
        <>
          <h2 className="h3-title vowels-title">Vowels: unblocked sounds</h2>
          <br />
          {renderShortVowels()}
          {renderLongVowels()}
          {renderRColoredVowels()}
        </>
      );
    }

    if (page === "consonants") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Consonants: blocked sounds</h3>
          </div>
        </div>
      );
    }

    if (page === "quiz") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Quiz</h3>
            <Quiz quiz={quiz} />
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
        <Navbar className="navbar" expand="lg">
          <Dropdown
            onMouseEnter={() => {
              setIsAuthorHovered(true);
              setIsPhonemesClicked(false);
              setIsPhonemesHovered(false);
            }}
            onMouseLeave={() => {
              setIsAuthorHovered(false);
              setIsPhonemesClicked(false);
              setIsPhonemesHovered(false);
            }}
            onToggle={() => {
              setIsAuthorClicked(!isAuthorClicked);
              setIsPhonemesClicked(false);
              setIsPhonemesHovered(false);
            }}
            show={isAuthorClicked || isAuthorHovered}
          >
            <Dropdown.Toggle
              href="#about-author"
              variant="secondary"
              id="dropdown-about"
            >
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
          <Dropdown
            onMouseEnter={() => {
              setIsPhonemesHovered(true);
              setIsAuthorClicked(false);
              setIsAuthorHovered(false);
            }}
            onMouseLeave={() => {
              setIsPhonemesHovered(false);
              setIsAuthorClicked(false);
              setIsAuthorHovered(false);
            }}
            onToggle={() => {
              setIsPhonemesClicked(!isPhonemesClicked);
              setIsAuthorClicked(false);
              setIsAuthorHovered(false);
            }}
            show={isPhonemesClicked || isPhonemesHovered}
          >
            <Dropdown.Toggle
              href="#phonemes"
              onClick={() => setPage("phonemes")}
              variant="secondary"
              id="dropdown-phonemes"
            >
              Phonemes
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#short-vowels"
                onClick={() => setPage("short-vowels")}
              >
                Short vowels
              </Dropdown.Item>
              <Dropdown.Item
                href="#long-vowels"
                onClick={() => setPage("long-vowels")}
              >
                Long vowels
              </Dropdown.Item>
              <Dropdown.Item
                href="#r-colored-vowels"
                onClick={() => setPage("r-colored-vowels")}
              >
                R-colored vowels
              </Dropdown.Item>
              <Dropdown.Item
                href="#diphthongs"
                onClick={() => setPage("diphthongs")}
              >
                Diphthongs
              </Dropdown.Item>
              <Dropdown.Item
                href="#consonants"
                onClick={() => setPage("consonants")}
              >
                Consonants
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav className="mr-auto">
            <Nav.Link href="#stress" onClick={() => setPage("stress")}>
              Stress
            </Nav.Link>
            <Nav.Link href="#intonation" onClick={() => setPage("intonation")}>
              Intonation
            </Nav.Link>
            <Nav.Link href="#resources" onClick={() => setPage("resources")}>
              Resources
            </Nav.Link>
            <Nav.Link href="#quiz" onClick={() => setPage("quiz")}>
              Quiz
            </Nav.Link>
          </Nav>
          <Form inline>
            <GiMagnifyingGlass className="mag" />
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar>

        <div className="body">{renderBody()}</div>
        {/* <div className="footer">Created in 2020</div> */}
      </div>
    </HelmetProvider>
  );
};

export default App;
