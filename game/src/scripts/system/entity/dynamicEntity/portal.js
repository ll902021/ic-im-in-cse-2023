import config from "../../../config.js";
import _entityList from "../_entityList.js";
import { DynamicEntity } from "./dynamicEntity.js";
export class Portal extends DynamicEntity {
    constructor(id, directLink) {
        super(id, 'Portal', config.imagePath.portal);
        this.directLink = directLink;
        this.imagePath = config.imagePath.portal;
    }
    action() {
        this.getElement().style.filter = 'brightness(120%)';
        setTimeout(() => {
            document.location.href = this.directLink;
        }, 3000);
    }
}
export function getPortal(id) {
    return _entityList.portal.find(portal => portal.getId() == id);
}
