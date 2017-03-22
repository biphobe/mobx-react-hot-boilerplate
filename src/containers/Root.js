import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import DevTools from "mobx-react-devtools";

@inject("appStore") @observer
class Root extends Component {
    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appStore.timer}
                </button>
                <DevTools />
            </div>
        );
    }

    onReset = () => {
        this.props.appStore.resetTimer();
    }
}

export default Root;
