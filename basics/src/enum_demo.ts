// enum with default value starting at 0
enum DoorState{
    Open,
    Closed
}

// enum with custom value
enum DoorStateCustomValue{
    Open = 9,
    Closed = 100
}

// string enum
enum DoorStateStringEnum{
    Open = "o",
    Closed = "c"
}

function checkDoorState(state: DoorState){
    // console.log(`enum value is: ${state}`)
    switch (state){
        case DoorState.Open:
            console.log("Door is open")
            break
        case DoorState.Closed:
            console.log("Door is closed")
            break
    }
}

checkDoorState(DoorState.Closed)
