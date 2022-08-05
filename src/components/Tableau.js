import React, { Component } from "react";

class Tableau extends Component {
    componentDidMount() {
        this.initViz()
    }

    initViz() {
        const vizUrl = "https://public.tableau.com/shared/X2C4D5XP9?:display_count=n&:origin=viz_share_link";
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl);
    }

    render() {
        return (
            <div className="spreadsheet-frame" ref={(div) => {this.vizContainer = div}}></div>
        )
    }
}

export default Tableau;