import config from "../../config.js";
import _entityList from "./_entityList.js";
import { Entity } from "./entity.js";
import { getNPC } from "./dynamicEntity/npc.js";
import { getPortal } from "./dynamicEntity/portal.js";
import { Game } from "../game.js";
export class BackGround extends Entity {
    constructor(id, last, next, entityList, device = 'PC') {
        super(id, 'BG', config.imagePath.backGround[device][id]);
        this.last = last;
        this.next = next;
        this.entityList = entityList;
        this.device = device;
    }
    getLast() {
        return this.last;
    }
    getNext() {
        return this.next;
    }
    getEntityList() {
        return this.entityList;
    }
    summon() {
        super.summon();
        this.entityList.forEach(entityId => getEntity(entityId).summon());
    }
    kill() {
        this.entityList.forEach(entityId => getEntity(entityId).kill());
        super.kill();
    }
}
const getEntity = (entityId) => {
    const npc = getNPC(entityId);
    if (typeof npc != 'undefined')
        return npc;
    return getPortal(entityId);
};
export function getBGClass(id) {
    return _entityList.backGround[Game.device].find(backGround => backGround.getId() == id);
}
