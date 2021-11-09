// if

let inputText = myText()

if (inputText === 'Yes'){
    alert('You are correct!');
    alert('Well done.');
}

//functions

function multiplyTwo(x,y){
    let number = x + y;
    return number;
}

let drone = {
    esc: 'hobbywing',
}
function flyDrone(drone){
    console.log(drone.esc)
}

multiplyTwo(4,20);

//objects

let indoorDrone = {
    frame:'160mm',
    flight_controller: 25,
    esc:null,
    rx:'crossfire',
    vtx:'unify nano',
    naked_camera:true,
    hd_camera:true
};

indoorDrone.esc; //dot notation
indoorDrone['frame']; //bracket notation

//for loop

for(let z = 2; z <= 100; z++){
    console.log(z)
}

//things to learn:
//normalize name inputs to account for accents/other accessibility issues