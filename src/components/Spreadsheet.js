import { render } from "@testing-library/react";
import React, { Component } from "react";
import tableau from "tableau-api";

class Spreadsheets extends Component {
  state = {
    current: [true, false, false, false],
  };

  handleClick = (event) => {
    event.preventDefault();

    let newSheet = event.target.id;
    newSheet = parseInt(newSheet.substring(4));
    let future = [false, false, false, false];
    future[newSheet] = true;
    //console.log(this.state);
    this.setState({ current: future });
  };

  /*initViz() {
    const vizUrl = "https://public.tableau.com/shared/X2C4D5XP9?:display_count=n&:origin=viz_share_link";
    const vizContainer = this.vizContainer;
    const options = {
      width: this.vizContainer.offsetWidth,
      height: this.vizContainer.offsetHeight
    }
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options);
  }

  componentDidMount () {
    this.initViz();
  } */

  render() {
    return (
      <div>
        <div className="flex f-around container spreadsheets-main">
          <div className="row">
            <div className="col xl8 l12">
              <p className="content-message mt-n">
                Ever since I've access to a computer, I've loved spreadsheets.
                There's something so satisfying about clean, well-formatted, and
                visually appealing data. Throughout all my various hobbies,
                spreadsheets are a commonality. Below, you'll see a spreadsheet
                where I track the releases of packs for the Sims 4, a
                spreadsheet where I try to predict the winner of Eurovision from
                Youtube rankings, a spreadsheet where I list all of the books I
                own, and more! Many of these spreadsheets I actively use and
                update with new information, so keep an eye out for change.
              </p>
            </div>
            <div className="col xl4 l6 s12">
              <div className="flex f-around f-wrap f-vcenter">
                <button
                  onClick={this.handleClick}
                  className="waves-effect btn light-green"
                  id="btn-0"
                >
                  Sims 4 Packs
                </button>
                <button
                  onClick={this.handleClick}
                  className="waves-effect btn light-green"
                  id="btn-1"
                >
                  Eurovision 2022 Predictions
                </button>
                <button
                  onClick={this.handleClick}
                  className="waves-effect btn light-green"
                  id="btn-2"
                >
                  Books
                </button>
                <button
                  onClick={this.handleClick}
                  className="waves-effect btn light-green"
                  id="btn-3"
                >
                  Dimension 20 Minis Auction
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="line light-green darken-3"></div>
        </div>
        <div className="mb-lg">
          <div
            id="sec-books"
            className={this.state.current[0] ? "sheet-sec" : "sheet-sec hide"}
          >
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
              <p>
                This spreadsheet has evolved over time. At the beginning, it
                only looked at release dates. As someone who only got into the
                Sims in March 2021, I was curious how often they released new
                content. In particular I was curious about the frequency of
                major pack releases. I started this spreadsheet around the same
                time as a new content type, Kits, were first released, adding in
                a new layer of exploration as the Sims appears to have pivoted
                from Stuff Packs to the even smaller Kits. Another area of
                interest for me was the amount of items in each release. Items
                in the Sims can be broken into CAS (Create a Sim) items and
                Build/Buy items. From there, it was easy to extrapolate the pack
                value based on number of items alone. However, this doesn't tell
                the whole story. New gameplay features can be hard to quantify,
                such as new careers or game systems. But for certain Simmers,
                knowing the value of the items you're buying can have an impact
                on whether you buy the pack.
              </p>
            </div>
            <iframe
              id="frame-sims"
              className="spreadsheet-frame"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTCdrFzWYnk-JcUyBnthPKl3Dx8A2396Pkk302422nfRoY2apLyEEri-AnM7qVeFoEhABMx7DU0i26-/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            ></iframe>
          </div>
          <div
            id="sec-esc22"
            className={this.state.current[1] ? "sheet-sec" : "sheet-sec hide"}
          >
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
                rankings, their average performance didn't qualify them for the
                finals, showing that analysis of studio versions of songs can't
                fully predict what happens when everyone gets on the Eurovision
                stage.
              </p>
              <p>
                At the bottom of the spreadsheet are the other sheets that help
                with creating this final collection. <strong>Actual</strong>{" "}
                looks at the real placements of the countries and how that
                compares to the data I collected. <strong>Input</strong> is
                obviously the sheet where I inputted all the data, as well as
                started to sort it based on semi-finals. I also added a way to
                quickly and easily see where various Youtubers ranked a specific
                country, as well as where their personal cutoffs for each
                semi-final ranked. <strong>Middleman</strong> is only used to
                calculate places in each semi-final to better automatically sort
                data on the real spreadsheet.{" "}
                <strong>My Ranking Over Time</strong> was a mini-experiment to
                see how my taste changed over the course of the month.{" "}
                <strong>Calculating Points</strong> was used during the live
                show to be able to see who the winner would be, since there are
                a finite amount of points to be given. It definitely helped take
                the sting out of the very drawn out moments between announcing
                points. It also shows which countries were preferred by the
                public and which were preferred by the juries - Moldova was
                ranked 20th by the juries, but 2nd by the public!
              </p>
            </div>
            <iframe
              id="frame-esc22"
              className="spreadsheet-frame"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTDPtoPUbRSozcdEqZ9RYvIL-jDl0ZsirDDekUOMKMhvQOfNKp3FhPvyH1GMWr4jZEDWjtX0jr8iU9Q/pubhtml?widget=true&amp;headers=false"
            ></iframe>
          </div>
          <div
            id="sec-books"
            className={this.state.current[2] ? "sheet-sec" : "sheet-sec hide"}
          >
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
          <div
            id="sec-d20auction"
            className={this.state.current[3] ? "sheet-sec" : "sheet-sec hide"}
          >
            <div className="container">
              <h4>Dimension 20 Minis Auction</h4>
              <p>
                In July 2022, Dimension 20 announced that they would be
                auctioning off custom minis from their acclaimed season
                <strong>A Crown of Candy</strong>. They started the bids at $50,
                but no one realized just how popular this auction would be. The
                literal second each new wave is released, the minis shoot up in
                amount as bidding wars begin. This visualization compares the
                importance of the mini with the amount raised and the number of
                bids. By categorizing the minis as player minis, NPC minis, or background minis, we can make a couple of generalizations. First, that play minis tend to earn a lot more with less bids, meaning that people bid high quickly. NPCs tend to earn less, but have a variety of bid levels, showing that they're less important. NPCs are all over the map, likely due to the variance of use on the show. 
              </p>
            </div>
            <iframe id="frame-d20auction" className="spreadsheet-frame" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmhGIt24-hxahczxDksbg2lsMKT0ya5SEJO49Qu5j0LH8IqlI-yAF9Y6-79Tcttd8RmmIIQffC2drX/pubhtml?gid=1637692870&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            <img src="./assets/d20autcion.png" className="spreadsheet-img" />
          </div>
        </div>
      </div>
    );
  }
}

export default Spreadsheets;
