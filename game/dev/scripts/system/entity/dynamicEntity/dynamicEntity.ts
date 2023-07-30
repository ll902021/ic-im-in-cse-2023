import { Entity } from "../entity.js";

export abstract class DynamicEntity extends Entity implements IDynamicEntity {

    constructor(
        id: string,
        className: string,
        imagePath: string
    ) {
        super(id, className, imagePath);
    }

    getPosition(): IPosition {
        const rect = this.getElement().getBoundingClientRect();

        return {
            left: rect.left,
            right: rect.right
        }
    }

    getSize(): ISize {
        const rect = this.getElement().getBoundingClientRect();

        return {
            width: rect.width,
            height: rect.height,
        };
    }

    setPosition(x: string) {
        const element = this.getElement();

        element.style.left = x; // left

        return this;
    }

    setSize(width: string, height: string) {
        const element = this.getElement();

        element.style.width = width;
        element.style.height = height;
    }

}