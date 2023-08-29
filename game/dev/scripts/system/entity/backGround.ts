import config from "../../config.js";
import _entityList from "./_entityList.js";

import { Entity } from "./entity.js";
import { NPC, getNPC } from "./dynamicEntity/npc.js";
import { Portal, getPortal } from "./dynamicEntity/portal.js";
import { Game } from "../game.js";

export class BackGround extends Entity implements IBackGround {

    constructor(
        id: string,
        private last: OrNull<string>,
        private next: OrNull<string>,
        private entityList: string[],
        private device: 'PC' | 'Mobile' = 'PC'
    ) {
        super(id, 'BG', config.imagePath.backGround[device][id]);
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

const getEntity = (entityId: string): NPC | Portal => {
    const npc = getNPC(entityId);
    if (typeof npc != 'undefined') return npc;
    return getPortal(entityId);
}

export function getBGClass(id: string) {
    return _entityList.backGround[Game.device].find(backGround => backGround.getId() == id);
}