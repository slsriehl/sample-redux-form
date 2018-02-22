
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import store from './state/store'
import routes from "./routes";

import styles from '../scss/index.styles.scss';

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById("app"));
