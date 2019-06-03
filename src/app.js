import "bootstrap/dist/css/bootstrap.css";
import "./css/style.scss";

import { setEventListener as attachFormListener } from "./js/apply_form_cheks";

// import "./../node_modules/bootstrap/dist/css/bootstrap.css";

window.onload = attachFormListener();
