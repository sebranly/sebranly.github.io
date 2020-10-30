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
import {
  rColoredVowels,
  longVowels,
  shortVowels,
  diphthongs,
  consonants,
} from "./phonemes";
import { mapping } from "./search";
import uniqBy from "lodash/uniqBy";

const App = () => {
  const [isAuthorHovered, setIsAuthorHovered] = React.useState(false);
  const [isPhonemesHovered, setIsPhonemesHovered] = React.useState(false);
  const [emailBody, setEmailBody] = React.useState("");
  const [emailSubject, setEmailSubject] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [matches, setMatches] = React.useState<any>([]);

  const hash = window?.location?.hash?.substr(1);
  const [page, setPage] = React.useState(hash);

  const setPageAndClear = (hash: string) => {
    setSearch("");
    setMatches([]);
    setPage(hash);
  };

  window.onhashchange = function () {
    const hash = window?.location?.hash?.substr(1);
    setPageAndClear(hash);
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

  const renderBlockSounds = (blocks: any) => {
    const audio = new Audio(
      "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
    );

    return (
      <>
        <h4>Click for sound</h4>
        <div className="container">
          {blocks.map((block: any) => {
            return (
              <div
                className="element"
                onClick={() => {
                  audio.play();
                }}
              >
                {block}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const renderShortVowels = () => {
    return (
      <div className="block-2">
        <div className="article">
          <h3 className="h3-title">6 Short Vowels /æ, ɛ, ɪ, ɑ, ʌ, ʊ/</h3>
          <br />
          {renderBlockSounds(["æ", "ɛ", "ɪ", "ɑ", "ʌ", "ʊ"])}
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
          <h3 className="h3-title">Diphthongs</h3>
          <div>
            Diphthongs are a combination of two vowel sounds. There are eight
            diphthongs in the IPA: aɪ, eɪ, ɔɪ, aʊ, ɪə, ʊə, əʊ, eə. All eight
            phonemes can be found in RP, while only five sounds are produced in
            American English.
          </div>
          {renderTable(diphthongs, false)}
        </div>
      </div>
    );
  };

  const renderMain = () => {
    return (
      <div className="block-2">
        <div className="article">
          <h3 className="h3-title">
            Learn how to speak English the American way
          </h3>
          <ul>
            <li>Practice sounds</li>
            <li>Practice intonation</li>
            <li>Practice stress</li>
            <li>TODO: links</li>
          </ul>
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
            <div>
              According to the International Phonetic Alphabet (IPA), there are
              26 letters and 44 phonemes (or sounds) in the English alphabet.
              These letters are divided into two categories:{" "}
              <a
                className="clickable-page"
                href="#vowels"
                onClick={() => setPageAndClear("vowels")}
              >
                vowels
              </a>{" "}
              and{" "}
              <a
                className="clickable-page"
                href="#consonants"
                onClick={() => setPageAndClear("consonants")}
              >
                consonants
              </a>
              .
            </div>
            <br />
            <div>
              Notes: Phonemes should not rely on the word’s spelling. For
              example, the word m
              <i>
                <b>oo</b>
              </i>
              n is not spelled with the letter ‘u’, yet is produced with the
              long /u/ phoneme.{" "}
            </div>
          </div>
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
        <div className="block-2">
          <div className="article">
            <h2 className="h3-title vowels-title">Vowels</h2>
            <br />
            <div>
              Vowels are a set of unblocked sounds that are essential to
              producing a syllable. They consist of the letters A, E, I, O, U
              (sometimes Y). The IPA lists 20 phonemes categorized as long,
              short, and diphthongs.
            </div>
            <br />
            <div>
              Vowels can sometimes be categorized as lax (short) and tense
              (long) depending on the muscular effort the lips and tongue make
              during phoneme production.
            </div>
            <br />
            <div>
              Listed below are the phonemes that are widely used in the American
              English language. Some words might vary in phonemes depending on
              regional dialects.
            </div>

            {/* {renderShortVowels()}
          {renderLongVowels()}
          {renderRColoredVowels()} */}
          </div>
        </div>
      );
    }

    if (page === "consonants") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Consonants</h3>
            <div>
              Consonants have 24 blocked sounds. In the IPA, consonants are
              arranged completely differently from the English alphabet. Each
              phoneme is organized based on the sound’s place of articulation
              and alternates between voiced and unvoiced
            </div>
            {renderTable(consonants)}
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

    if (["stress", "intonation", "resources"].includes(page)) {
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
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
    }

    return renderMain();
  };

  const renderMatches = () => {
    if (matches.length === 0 && search.length > 0) {
      return (
        <div className="resultsWrapper">
          <div className="results">No results yet...</div>
        </div>
      );
    }

    if (matches.length === 0) return null;

    const matchesLinks = matches.map((m: any) => (
      <div>
        <a
          className="result"
          href={`#${m[1]}`}
          onClick={() => {
            setPageAndClear(m[1]);
          }}
        >
          {m[2]}
        </a>{" "}
        {`("${m[0]}")`}
      </div>
    ));

    return (
      <div className="resultsWrapper">
        <div className="results">
          Results: <div>{matchesLinks}</div>
        </div>
      </div>
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
        <h2 className="h2-title">English Pronunciation</h2>
        <Navbar className="navbar" expand="lg">
          <Dropdown
            onMouseEnter={() => {
              setIsAuthorHovered(true);
              setIsPhonemesHovered(false);
            }}
            onMouseLeave={() => {
              setIsAuthorHovered(false);
            }}
            show={isAuthorHovered}
          >
            <Dropdown.Toggle
              href="#about-author"
              onClick={() => {
                setPageAndClear("about-author");
                setIsAuthorHovered(false);
              }}
              variant="secondary"
              id="dropdown-about"
            >
              About
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#about-author"
                onClick={() => {
                  setPageAndClear("about-author");
                  setIsAuthorHovered(false);
                }}
              >
                About the Author
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setPageAndClear("letter-teachers");
                  setIsAuthorHovered(false);
                }}
                href="#letter-teachers"
              >
                Letter to Teachers
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            onMouseEnter={() => {
              setIsPhonemesHovered(true);
              setIsAuthorHovered(false);
            }}
            onMouseLeave={() => {
              setIsPhonemesHovered(false);
            }}
            show={isPhonemesHovered}
          >
            <Dropdown.Toggle
              href="#phonemes"
              onClick={() => {
                setPageAndClear("phonemes");
                setIsPhonemesHovered(false);
              }}
              variant="secondary"
              id="dropdown-phonemes"
            >
              Phonemes
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#short-vowels"
                onClick={() => {
                  setPageAndClear("short-vowels");
                  setIsPhonemesHovered(false);
                }}
              >
                Short vowels
              </Dropdown.Item>
              <Dropdown.Item
                href="#long-vowels"
                onClick={() => {
                  setPageAndClear("long-vowels");
                  setIsPhonemesHovered(false);
                }}
              >
                Long vowels
              </Dropdown.Item>
              <Dropdown.Item
                href="#r-colored-vowels"
                onClick={() => {
                  setPageAndClear("r-colored-vowels");
                  setIsPhonemesHovered(false);
                }}
              >
                R-colored vowels
              </Dropdown.Item>
              <Dropdown.Item
                href="#diphthongs"
                onClick={() => {
                  setPageAndClear("diphthongs");
                  setIsPhonemesHovered(false);
                }}
              >
                Diphthongs
              </Dropdown.Item>
              <Dropdown.Item
                href="#consonants"
                onClick={() => {
                  setPageAndClear("consonants");
                  setIsPhonemesHovered(false);
                }}
              >
                Consonants
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav className="mr-auto">
            <Nav.Link href="#stress" onClick={() => setPageAndClear("stress")}>
              Stress
            </Nav.Link>
            <Nav.Link
              href="#intonation"
              onClick={() => setPageAndClear("intonation")}
            >
              Intonation
            </Nav.Link>
            <Nav.Link
              href="#resources"
              onClick={() => setPageAndClear("resources")}
            >
              Resources
            </Nav.Link>
            <Nav.Link href="#quiz" onClick={() => setPageAndClear("quiz")}>
              Quiz
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              onKeyPress={(e: any) => {
                if (e.keyCode === 13 || e.which === 13) {
                  e.preventDefault();

                  if (matches.length > 0) {
                    const match = matches[0];
                    const key = match[1];

                    setPageAndClear(key);
                    window.location.href = `#${key}`;
                  }
                }
              }}
              onChange={(e) => {
                const input = e.target.value;
                const inputLowercase = input.toLowerCase();
                setSearch(input);

                const newMatches: any[] = [];

                mapping.forEach((m: any) => {
                  const key = m[0];

                  if (input.length >= 3) {
                    const matchKey = key.find((k: any) =>
                      k.includes(inputLowercase)
                    );

                    if (matchKey) {
                      newMatches.push([matchKey, m[1], m[2]]);
                    }
                  }
                });

                const sortedNewMatches = newMatches.sort(function (a, b) {
                  return a[0].length - b[0].length;
                });

                const uniqNewMatches = uniqBy(sortedNewMatches, (m) => m[2]);
                setMatches(uniqNewMatches);
              }}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={search}
            />
          </Form>
        </Navbar>

        <div className="body">
          {renderMatches()}
          {renderBody()}
        </div>
        {/* <div className="footer">Created in 2020</div> */}
      </div>
    </HelmetProvider>
  );
};

export default App;
