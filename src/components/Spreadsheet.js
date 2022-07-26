import { render } from "@testing-library/react";
import React, { Component } from "react";

class Spreadsheets extends Component {  
  state = {
    current: [true, false, false]
  }

  handleClick = (event) => {
    event.preventDefault();

    let newSheet = event.target.id;
    newSheet = parseInt(newSheet.substring(4));
    let future = [false, false, false];
    future[newSheet] = true;
    //console.log(this.state);
    this.setState({current: future});
  }

  render() {
    return (
      <div>
        <div className="flex f-around container">
          <div className="row">
            <div className="col l8 m6 s12">
              <p className="content-message mt-n">
                Ever since I've access to a computer, I've loved spreadsheets.
                There's something so satisfying about clean, well-formatted, and
                visually appealing data. Throughout all my various hobbies,
                spreadsheets are a commonality. Below, you'll see a spreadsheet
                where I track the releases of packs for the Sims 4, a spreadsheet
                where I try to predict the winner of Eurovision from Youtube
                rankings, a spreadsheet where I list all of the books I own, and
                more! Many of these spreadsheets I actively use and update with new
                information, so keep an eye out for change.
              </p>
            </div>
            <div className="col l4 m6 s12">
              <div className="flex f-around f-wrap f-vcenter">
                <button
                  onClick={this.handleClick}
                  className="waves-effect waves-light btn light-green"
                  id="btn-0"
                >
                  Sims 4 Packs
                </button>
                <button
                  onClick={this.handleClick}
                  className="waves-effect waves-light btn light-green"
                  id="btn-1"
                >
                  Eurovision 2022 Predictions
                </button>
                <button
                  onClick={this.handleClick}
                  className="waves-effect waves-light btn light-green"
                  id="btn-2"
                >
                  Books
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="line light-green darken-3"></div>
        </div>
        <div className="mb-lg">
          <div id="sec-books" className={this.state.current[0] ? "" : "hide"}>
            <div className="container">
              <h4 className="sheet-subheading">Sims 4 Pack Releases</h4>
              <p>
                The idea of this spreadsheet was to track Sims 4 releases in
                general. One of the first stats I pulled out was how much time
                passed in-between packs, especially between packs of the same
                type. Later on I was curious about the amount of items in each
                pack, and set about trying to compare the type of packs with how
                many items they offered. The best part of the Sims is that types
                were already color-coded, making this a very colorful
                spreadsheet!
              </p>
            </div>
            <iframe
              id="frame-sims"
              className="spreadsheet-frame"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTCdrFzWYnk-JcUyBnthPKl3Dx8A2396Pkk302422nfRoY2apLyEEri-AnM7qVeFoEhABMx7DU0i26-/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            ></iframe>
          </div>
          <div id="sec-esc22" className={this.state.current[1] ? "" : "hide"}>
            <div className="container">
              <h4 className="sheet-subheading">Eurovision 2022</h4>
              <p>
                Eurovision is ripe for statistical analysis, even just using
                Google Sheets. It's a popular phenomenon on Youtube to rank your
                favorite songs, outside of the structure of the contest. From a
                top 40, you can plug that into the semi-finals and final to find
                out the actual ranking if that was the true order of songs. By
                replicating with many different Youtubers (and my own personal
                ranking), I tried to predict who would win - or at least make
                the finals. While Sweden, the top choice, didn't win, it did
                place 4th. A big surprise was Austria. While they were the only
                non-Big 5 country to always make the finals in the Youtube
                rankings, their average performance didn't qualify they for the
                finals, showing that analysis of studio versions of songs can't
                fully predict what happens when everyone gets on the Eurovision
                stage.
              </p>
            </div>
            <iframe
              id="frame-esc22"
              className="spreadsheet-frame"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTDPtoPUbRSozcdEqZ9RYvIL-jDl0ZsirDDekUOMKMhvQOfNKp3FhPvyH1GMWr4jZEDWjtX0jr8iU9Q/pubhtml?widget=true&amp;headers=false"
            ></iframe>
          </div>
          <div id="sec-books" className={this.state.current[2] ? "" : "hide"}>
            <div className="container">
              <h4 className="sheet-subheading">Books I Own</h4>
              <p>
                After talking to a friend about not buying a book until I found
                it at a thrift store, I was curious about what percentage of my
                books I bought used. I spent an evening entering in the data,
                and what I found pleasantly surprised me! Over 65% of my total
                library was bought used - over 70% if you only look at books. It
                made perfect sense that I bought most of my Graphic Novels and
                RPG books new, since the culture for those is small enough that
                finding them in thrift stores or used bookstores is pure luck.
              </p>
            </div>
            <iframe
              id="frame-books"
              className="spreadsheet-frame"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQlcmbzq5saB-cIt_HKOkNlv90dQk0Zf0lplUGw6bjPxW-HWf1kS64d1Kh2mb2B6-scVhj4jEtEMBP/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Spreadsheets;
