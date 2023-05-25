function registrationNumbers(){
    var registrationNum = []
    var location = []
    var fromWhichTown = []

    function setRegistration(registration){
        registrationNum.push(registration)
    }

    function setTown(town){
        location.push(town)
    }

    function registrations(){
        for(var i=0; i<registrationNum.length; i++){
            var regNum = registrationNum[i].trim()
            if(regNum.startsWith(location))
            fromWhichTown.push(regNum)
        }
        return fromWhichTown;
    }

    return {
        setRegistration,
        setTown,
        registrations,
    }
}