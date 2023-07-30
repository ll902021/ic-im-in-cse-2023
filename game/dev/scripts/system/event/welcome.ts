import config from "../../config.js";

import { TextBox } from "../entity/textBox.js";

export function welcomeMessage() {

    window.addEventListener('load', (ev) => {

        new TextBox('Welcome:Message', config.story["Welcome:Message"]).summon();

    })

}