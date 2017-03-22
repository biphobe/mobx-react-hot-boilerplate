import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "mobx-react";

import Root from "./containers/Root";
import stores from "./stores";

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider { ...stores }>
                <Root />
            </Provider>
        </AppContainer>,
        document.getElementById("root")
    );
};

render();

if (module.hot) {
    module.hot.accept("./containers/Root", render);
}
