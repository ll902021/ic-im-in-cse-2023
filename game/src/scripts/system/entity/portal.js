import config from "../../config.js";
import _entityList from "./_entityList.js";
import { DynamicEntity } from "./dynamicEntity/dynamicEntity.js";
export class Portal extends DynamicEntity {
    constructor(id, directLink) {
        super(id, 'Portal', config.imagePath.portal);
        this.directLink = directLink;
        this.imagePath = config.imagePath.portal;
    }
    action() {
        document.location.href = this.directLink;
    }
}
export function getPortal(id) {
    return _entityList.portal.find(portal => portal.getId() == id);
}
