import config from "../../../config.js";
import _entityList from "../_entityList.js";
import { Game } from "../../game.js";
import { DynamicEntity } from "./dynamicEntity.js";
export class Player extends DynamicEntity {
    constructor(id, speed) {
        super(id, 'Player', config.imagePath.player.standing);
        this.speed = speed;
    }
    move(direction) {
        const player = this.getElement();
        player.style.transform = (direction == 'right' ? 'scaleX(1)' : 'scaleX(-1)');
        let pos = this.getPosition();
        switch (direction) {
            case 'left':
                pos.left -= this.speed;
                break;
            case 'right':
                pos.left += this.speed;
                break;
        }
        const result = Game.isOutSide(pos);
        if (typeof result != 'undefined')
            return Game.loadFollowingBG(result);
        this.setPosition(pos.left + 'px');
        this.changePath(config.imagePath.player.running);
    }
}
export function getPlayer() {
    return _entityList.player;
}
