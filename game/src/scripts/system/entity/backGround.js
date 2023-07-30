import config from "../../config.js";
import _entityList from "./_entityList.js";
import { Entity } from "./entity.js";
import { getNPC } from "./dynamicEntity/npc.js";
import { getPortal } from "./dynamicEntity/portal.js";
export class BackGround extends Entity {
    constructor(id, last, next, entityList) {
        super(id, 'BG', config.imagePath.backGround[id]);
        this.last = last;
        this.next = next;
        this.entityList = entityList;
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
    return _entityList.backGround.find(backGround => backGround.getId() == id);
}
