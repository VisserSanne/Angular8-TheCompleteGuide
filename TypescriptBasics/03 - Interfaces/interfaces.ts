// You start with defining a interface, it's like a contract, you have to keep to everything in here

interface User {
  username: string;
  password: string;

  // This variable is optional, but that is because of the ?
  confirmPassword?: string;
}


let user: User;

// If we leave it like this we get an compilation error
// It doesn't honor the contract with the interface, so we assign it
user = {username: 'sjonnie', password: 'Wow!123'};


// Now we make another interface, this time with a function
interface CanDrive {
    accelarate(speed:number): void;
}

// This car has to have a function called accelarate with parameter number and return type void
let car:CanDrive = {
    accelarate: function (speed: number){
        speed++;
    }
}

