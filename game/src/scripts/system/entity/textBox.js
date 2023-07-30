var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TextBox_instances, _TextBox_readingStory;
import { Game } from "../game.js";
import { Entity, getEntity } from "./entity.js";
export class TextBox extends Entity {
    constructor(id, dialogue) {
        super(id, 'TextBox');
        this.dialogue = dialogue;
        _TextBox_instances.add(this);
    }
    summon() {
        super.summon('div');
        Game.status = 'reading';
        __classPrivateFieldGet(this, _TextBox_instances, "m", _TextBox_readingStory).call(this);
    }
}
_TextBox_instances = new WeakSet(), _TextBox_readingStory = function _TextBox_readingStory() {
    let isWaiting = false;
    let page = 0;
    const detector = (ev) => {
        if (ev instanceof KeyboardEvent && ev.key != 'f')
            return;
        if (!isWaiting)
            return;
        page++;
        isWaiting = false;
        if (page != this.dialogue.length)
            return showDialogue(page);
        Game.status = 'walking';
        this.kill();
        window.removeEventListener('keydown', detector);
        getEntity('interact').getElement().removeEventListener('touchstart', detector);
    };
    const showDialogue = (page) => {
        const textBox = document.getElementById(this.id);
        textBox.textContent = '';
        const dialog = this.dialogue[page];
        for (let word = 0; word < dialog.length; word++) {
            setTimeout(function () {
                textBox.textContent += dialog[word];
                if ((word + 1) % 20 == 0)
                    textBox.textContent = textBox.textContent + '\n';
                if (word == dialog.length - 1)
                    return isWaiting = true;
            }, 10 * word);
        }
    };
    showDialogue(page);
    window.addEventListener('keydown', detector);
    getEntity('interact').getElement().addEventListener('touchstart', detector);
};
