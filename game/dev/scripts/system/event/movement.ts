import config from "../../config.js";

import { Game } from "../game.js";
import { getPlayer } from "../entity/dynamicEntity/player.js";
import { getEntity } from "../entity/entity.js";

let mt = {
    left: false,
    right: false
}

function movement() {
    if (Game.status == 'walking') {

        const player = getPlayer();
        let moving = false;
        for (const dir in mt) {
            if (!mt[dir]) continue;
            moving = true;
            // @ts-ignore
            player.move(dir);
        }

        if (!moving) player.changePath(config.imagePath.player.standing)
    }
    requestAnimationFrame(movement);
}

const computerClient = () => {
    window.addEventListener('keydown', (ev) => {
        switch (ev.key) {
            case 'a': mt.left = true; break;
            case 'd': mt.right = true; break;

            case 'f':
                if (Game.status == 'walking') Game.interact();
                break;
        }
    })

    window.addEventListener('keyup', (ev) => {
        switch (ev.key) {
            case 'a': mt.left = false; break;
            case 'd': mt.right = false; break;
        }
    })
}

const mobileClient = () => {
    [
        ['leftArrow', 'left'],
        ['rightArrow', 'right']
    ].forEach(arrow => {
        const entity = getEntity(arrow[0]).getElement();
        entity.addEventListener('touchstart', (ev) => mt[arrow[1]] = true)
        entity.addEventListener('touchend', (ev) => mt[arrow[1]] = false)
    });

    getEntity('interact').getElement().addEventListener('touchstart', (ev) => {
        if (Game.status == 'walking') Game.interact();
    })
}

export const movementEvent = () => {
    movement();
    computerClient();
    mobileClient();
}