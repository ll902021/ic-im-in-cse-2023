import config from "../../../config.js";
import _entityList from "../_entityList.js";
import { DynamicEntity } from "./dynamicEntity.js";
import { TextBox } from "../textBox.js";
export class NPC extends DynamicEntity {
    constructor(id, name) {
        super(id, 'NPC', config.imagePath.npc[id]);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    action() {
        new TextBox(this.id + '_textBox', config.story[this.id]).summon();
    }
}
export function getNPC(id) {
    return _entityList.npc.find(npc => npc.getId() == id);
}
