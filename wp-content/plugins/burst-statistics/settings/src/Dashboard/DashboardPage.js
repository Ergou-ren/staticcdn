import {Component, Fragment} from "@wordpress/element";
import GridBlock from "../GridBlock";

class DashboardPage extends Component {
    constructor() {
        super( ...arguments );
    }

    render() {
        let blocks = burst_settings.blocks.dashboard;
        return (
            <>
                {blocks.map((block, i) => <GridBlock key={i} block={block} isApiLoaded={this.props.isAPILoaded} fields={this.props.fields} highLightField={this.props.highLightField} selectMainMenu={this.props.selectMainMenu}/>)}
            </>
        );
    }
}
export default DashboardPage