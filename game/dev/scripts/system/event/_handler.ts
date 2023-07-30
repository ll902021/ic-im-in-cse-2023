import { Game } from "../game.js";

import { movementEvent } from "./movement.js";
import { welcomeMessage } from "./welcome.js";

export function eventHandler() {
    window.addEventListener('DOMContentLoaded', () => {

        Game.initGame();

        [
            movementEvent,
            welcomeMessage
        ].forEach(event => event());

    })
}