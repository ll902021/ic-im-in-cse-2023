import { Game } from "../game.js";
import { Entity, getEntity } from "./entity.js";

export class TextBox extends Entity implements ITextBox {

    constructor(
        id: string,
        private readonly dialogue: string[]
    ) {
        super(id, 'TextBox');
    }

    #readingStory() {

        let isWaiting = false;
        let page = 0;

        const detector = (ev: KeyboardEvent | TouchEvent) => {
            if (ev instanceof KeyboardEvent && ev.key != 'f') return;
            if (!isWaiting) return;

            page++;
            isWaiting = false;
            if (page != this.dialogue.length) return showDialogue(page);

            Game.status = 'walking'
            this.kill();
            window.removeEventListener('keydown', detector)
            getEntity('interact').getElement().removeEventListener('touchstart', detector);
        }

        const showDialogue = (page: number) => {
            const textBox = document.getElementById(this.id);
            textBox.textContent = '';
            const dialog = this.dialogue[page];

            for (let word = 0; word < dialog.length; word++) {
                setTimeout(function () {
                    textBox.textContent += dialog[word];
                    if ((word + 1) % 20 == 0) textBox.textContent = textBox.textContent + '\n';
                    if (word == dialog.length - 1) return isWaiting = true;
                }, 10 * word);
            }
        }

        showDialogue(page);
        window.addEventListener('keydown', detector);
        getEntity('interact').getElement().addEventListener('touchstart', detector);
    }

    summon() {
        super.summon('div');

        Game.status = 'reading';
        this.#readingStory();
    }

}