import config from "../../../config.js";
import _entityList from "../_entityList.js";

import { DynamicEntity } from "./dynamicEntity.js";

export class Portal extends DynamicEntity implements IPortal {

    constructor(
        id: string,
        private directLink: string
    ) {
        super(id, 'Portal', config.imagePath.portal);

        this.imagePath = config.imagePath.portal;
    }

    action() {
        document.location.href = this.directLink;
    }

}

export function getPortal(id: string) {
    return _entityList.portal.find(portal => portal.getId() == id);
}
