import DoorModel from "../model/door";

export function createDoors(quantity: number, doorWithGift: number) : DoorModel[] {
    return Array.from({length: quantity}, (_, i) => {
        const num = i + 1
        const haveGift = num === doorWithGift
        return new DoorModel(num, haveGift)
    })
}

export function updateDoors(doors: DoorModel[], modified: DoorModel): DoorModel[]{
    return doors.map(currentDoor => {
        const equalToModified = currentDoor.num === modified.num

        if(equalToModified) {
            return modified
        } else {
            return modified.open ? currentDoor : currentDoor.deselect()
        }
    })
}