export default class DoorModel {
    #num: number
    #haveGift: boolean
    #selected: boolean
    #open: boolean

    constructor(num: number, haveGift = false, selected = false, open = false) {
        this.#num = num
        this.#haveGift = haveGift
        this.#selected = selected
        this.#open = open
    }

    get num(){
        return this.#num
    }

    get haveGift(){
        return this.#haveGift
    }

    get selected(){
        return this.#selected
    }

    get open(){
        return this.#open
    }

    get closed() {
        return !this.open
    }
    
    deselect() {
        const selected = false;
        return new DoorModel(this.num, this.haveGift, selected, this.open)
    }

    toggleSelection() {
        const selected = !this.selected;
        return new DoorModel(this.num, this.haveGift, selected, this.open)
    }

    openDoor() {
        const open = true;
        return new DoorModel(this.num, this.haveGift, this.selected, open)
    }
}