
function distanceFromHqInBlocks(PickupLocation){
    let hqLocation = 42
    if (PickupLocation >= hqLocation){
        return PickupLocation - hqLocation
    } else {
        return hqLocation - PickupLocation
    }
}

function distanceFromHqInFeet(PickupLocation){
    let lengthOfBlock = 264
    let disInFeet = distanceFromHqInBlocks(PickupLocation) * lengthOfBlock
    return disInFeet
}

function distanceTravelledInFeet(startingLocation1, startingLocation2){
    let lengthOfBlock = 264
    if (startingLocation1 > startingLocation2){
        return (startingLocation1 - startingLocation2) * lengthOfBlock
    } else {
        return (startingLocation2 - startingLocation1) * lengthOfBlock
    }
}

function calculatesFarePrice(startingLocation1, startingLocation2){
    let farePrice
    if (distanceTravelledInFeet(startingLocation1, startingLocation2) <= 400){
        return 0
    }else if (distanceTravelledInFeet(startingLocation1, startingLocation2) > 400 && distanceTravelledInFeet(startingLocation1, startingLocation2) <= 1999){
        return ((distanceTravelledInFeet(startingLocation1, startingLocation2)) - 400) * 0.02
    }else if (distanceTravelledInFeet(startingLocation1, startingLocation2) > 2000 && distanceTravelledInFeet(startingLocation1, startingLocation2) <= 2500){
        return 25
    }else if (distanceTravelledInFeet(startingLocation1, startingLocation2) > 2500) {
        return 'cannot travel that far'
    }
}