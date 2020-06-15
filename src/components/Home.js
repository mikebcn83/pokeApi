import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgHeader1 from "../images/gotta.png";
import pikachu from "../images/pikachu.gif";
import jiglipuff from "../images/jiglipuff.gif";
import song from "../images/jigglypuff_song.mp3";
import { _useLoadingState } from "./Hooks";
import Sound from "react-sound";
import "./Home.css";

export default function Home() {
  const [loading, error] = _useLoadingState();
  const [playAudio, setPlayAudio] = useState(false);
  const toggle = () => setPlayAudio(!playAudio);

  if (error) {
    return <div className="error">{error.toString()}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={imgHeader1} className="App-logo" />
        <figure>
          <img
            src={jiglipuff}
            className="App-logo"
            id="jiglipuff"
            onClick={toggle}
          />
          <figcaption className="figure-caption text-right">
            Pulse and Speakers ON!!
          </figcaption>
        </figure>
        <Sound
          url={song}
          playStatus={playAudio ? Sound.status.PLAYING : Sound.status.PAUSED}
          loop={true}
        />
      </header>

      {loading ? (
        <div className="App-loading">
          <img src={pikachu} />
          <p className="App-loading" id="text-loading">
            Loading... Just wait a few seconds, they are coming
          </p>
        </div>
      ) : (
        <div>
          <p className="App-button">
            <Link to="/" style={{ textDecoration: "inherit", color: "black" }}>
              Gotta catch 'em all'
            </Link>
            <Link
              to="/generation/I"
              style={{ textDecoration: "inherit", color: "red" }}
            >
              Generation I
            </Link>
            <Link
              to="/generation/II"
              style={{ textDecoration: "inherit", color: "orange" }}
            >
              Generation II
            </Link>
            <Link
              to="/generation/III"
              style={{ textDecoration: "inherit", color: "purple" }}
            >
              Generation III
            </Link>
            <Link
              to="/generation/IV"
              style={{ textDecoration: "inherit", color: "green" }}
            >
              Generation IV
            </Link>
            {/* <Link to="/generation/V" style={{ textDecoration: 'inherit', color: 'blue' }}>Generation V</Link>
            <Link to="/generation/VI" style={{ textDecoration: 'inherit', color: 'brown' }}>Generation VI</Link>
            <Link to="/generation/VII" style={{ textDecoration: 'inherit', color: 'gray' }}>Generation VII</Link> */}
            {/* These lines are disabled, because it takes too much time to load  */}
          </p>
        </div>
      )}
    </div>
  );
}
