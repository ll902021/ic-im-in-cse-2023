import _entityList from "./_entityList.js";
import { Game } from "../game.js";
export class Entity {
    constructor(id, className, imagePath = ' ') {
        this.id = id;
        this.className = className;
        this.imagePath = imagePath;
    }
    getId() {
        return this.id;
    }
    getPath() {
        return this.imagePath;
    }
    getElement() {
        return document.getElementById(this.id);
    }
    changePath(newPath) {
        this.getElement().style.backgroundImage = "url('" + newPath + "')";
        this.imagePath = newPath;
    }
    summon(elementType = 'img') {
        const [newEntity, game] = [document.createElement(elementType), document.getElementById('game')];
        newEntity.id = this.id;
        newEntity.className = this.className + ' ' + Game.device;
        game.appendChild(newEntity);
        if (typeof this.imagePath != 'undefined')
            this.changePath(this.imagePath);
    }
    kill() {
        this.getElement().remove();
    }
}
export function getEntity(id) {
    return _entityList.entity.find(entity => entity.getId() == id);
}
