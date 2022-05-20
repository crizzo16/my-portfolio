import React, {Component} from "react";
import "./dnd.css";


class CoinConverter extends Component {
    calculateCoins() {
        //Grab and parse coins from the inputs
        const coinage = ["copper", "silver", "gold", "platinum"];
        const copperFactor = [1, 10, 100, 1000];
        let totalCopper = 0;
        let inputCoins = [];
        const players = document.getElementById("num-people").value;
        coinage.forEach((value, index) => {
            const tempName = "input-" + value;
            if (isNaN(parseInt(document.getElementById(tempName).value))) {
                inputCoins.push(0);
            } else {
                inputCoins.push(parseInt(document.getElementById(tempName).value));
                totalCopper += inputCoins[index]*copperFactor[index];
            }
        });

        // Calculate individual share
        let share = Math.floor(totalCopper/players);
        const remainder = totalCopper - (share*players);

        //Calculate it back into reasonable coins
        let shareFull = [];
        let temp;
        for (let i = copperFactor.length-1; i >= 0; i--) {
            console.log("Share: ", share);
            console.log("Value: ", copperFactor[i]);
            if (share >= copperFactor[i]) {
                temp = Math.floor(share/copperFactor[i]);
                shareFull.unshift(temp);
                share -= temp*copperFactor[i];
            } else {
                shareFull.unshift(0);
            }
        }

        console.log("Share Full Length: ", shareFull.length);

        // Display it again
        shareFull.forEach((value, index) => {
            const tempName = "output-" + coinage[index];
            document.getElementById(tempName).value = value;
        });
        document.getElementById("output-remainder").value = remainder;
    }


    render() {
        return (
            <div className="border-magenta project-frame">
                <div className="row">
                    <input id="input-copper" className="coin-field" type="number" placeholder="0" />
                    <input id="input-silver" className="coin-field" type="number" placeholder="0" />
                    <input id="input-gold" className="coin-field" type="number" placeholder="0" />
                    <input id="input-platinum" className="coin-field" type="number" placeholder="0" />
                </div>
                <div className="row">
                    <input id="output-copper" disabled className="coin-field" type="number" placeholder="0" />
                    <input id="output-silver" disabled className="coin-field" type="number" placeholder="0" />
                    <input id="output-gold" disabled className="coin-field" type="number" placeholder="0" />
                    <input id="output-platinum" disabled className="coin-field" type="number" placeholder="0" />
                </div>
                <div className="row">
                    <input id="num-people" className="coin-field" type="number" placeholder="1" />
                    <input id="output-remainder" disabled className="coin-field" type="number" placeholder="0" />
                    <button id="coin-submit" onClick={this.calculateCoins}>Calculate</button>
                </div>
            </div>
        );
    }
}

export default CoinConverter;