import React from "react";

function Spreadsheets() {
  return (
    <div>
      <div className="flex f-around">
        <p className="content-message">
          Ever since I had access to a computer, I've loved spreadsheets.
          There's something so lovely about clean and well-formatted data.
          Throughout all my various hobbies,spreadsheets are a commonality.
          Below, you'll see a spreadsheet where I track the releases of packs
          for the Sims 4, a spreadsheet where I try to predict the winner of
          Eurovision from Youtube rankings, a spreadsheet where I list all of
          the books I own, and more! Many of these spreadsheets I actively use
          and update with new information, so keep an eye out for change.
        </p>
        <div className="flex f-around f-wrap">
          <button className="waves-effect waves-light btn cyan" id="btn-sims">
            Sims 4 Packs
          </button>
          <button className="waves-effect waves-light btn cyan" id="btn-esc22">
            Eurovision 2022 Predictions
          </button>
          <button className="waves-effect waves-light btn cyan" id="btn-books">
            Books
          </button>
        </div>
      </div>
      <div>
        <iframe
          id="frame-sims"
          className="spreadsheet-frame"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTCdrFzWYnk-JcUyBnthPKl3Dx8A2396Pkk302422nfRoY2apLyEEri-AnM7qVeFoEhABMx7DU0i26-/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
        <iframe
          id="frame-esc22"
          className="spreadsheet-frame hide"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTDPtoPUbRSozcdEqZ9RYvIL-jDl0ZsirDDekUOMKMhvQOfNKp3FhPvyH1GMWr4jZEDWjtX0jr8iU9Q/pubhtml?widget=true&amp;headers=false"
        ></iframe>
        <iframe
          id="frame-books"
          className="spreadsheet-frame hide"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQlcmbzq5saB-cIt_HKOkNlv90dQk0Zf0lplUGw6bjPxW-HWf1kS64d1Kh2mb2B6-scVhj4jEtEMBP/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
      </div>
    </div>
  );
}

export default Spreadsheets;
