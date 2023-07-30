import config from "../../../config.js";
import _entityList from "../_entityList.js";

import { DynamicEntity } from "./dynamicEntity.js";
import { Game } from "../../game.js";
import { TextBox } from "../textBox.js";

export class NPC extends DynamicEntity implements INPC {

    constructor(
        id: string,
        private readonly name: string
    ) {
        super(id, 'NPC', config.imagePath.npc[id]);
    }

    getName() {
        return this.name;
    }

    action() {
        new TextBox(this.id + '_textBox', config.story[this.id]).summon();
    }

}

export function getNPC(id: string) {
    return _entityList.npc.find(npc => npc.getId() == id);
}