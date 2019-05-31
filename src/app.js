import "./css/style.css";
// import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";

import { setEventListener as attachFormListener } from "./js/apply_form_cheks";

window.onload = attachFormListener();
