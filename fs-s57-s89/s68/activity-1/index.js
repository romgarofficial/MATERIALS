class Reservation {

    constructor(guestNames, roomNumber, roomType, dateReserved) {

        //Validate Date Reserved
        if (typeof dateReserved !== 'string' || !/\d{2}-\d{2}-\d{4}/.test(dateReserved)) {
            return "Date reserved must be in the format 'dd-mm-yyyy'.";
        }

        // Validate guestNames
        if (!Array.isArray(guestNames) || guestNames.length === 0) {
            return "Guest names must be a non-empty array.";
        }
    
        // Validate roomNumber
        if (typeof roomNumber !== 'number' || roomNumber <= 0) {
           "Room number must be a positive number.";
        }
    
        // Validate roomType
        if (typeof roomType !== 'string' || roomType.trim() === '') {
            return "Room type must be a non-empty string.";
        }
    
        this.guestNames = guestNames;
        this.roomNumber = roomNumber;
        this.roomType = roomType;
    
        const [day, month, year] = dateReserved.split('-').map(Number);
        this.dateReserved = new Date(year, month - 1, day); 

    }

    addGuestName(guestName) {
        
        if(typeof guestName === 'string') {

            this.guestNames.push(guestName);
            return "Guest added successfully";
        }

        return this.guestNames;
    }

    getGuestNames() {

        if (this.guestNames.length === 0) {
            return "No guests found";
        }
    
        return this.guestNames;

    }

    getRoomNumber() {
        return this.roomNumber;
    }

    getRoomType() {
        return this.roomType;
    }

    getNumberOfGuests() {
        return this.guestNames.length;
    }

    getDateReserved() {
        return this.dateReserved;
    }

    removeAllGuests() {
        this.guestNames = [];
    }

    removeGuestByName(guestName) {
        if (typeof guestName === 'string') {
          let removed = false;
          for (let i = 0; i < this.guestNames.length; i++) {
            if (this.guestNames[i] === guestName) {
              this.guestNames.splice(i, 1);
              removed = true;
              break;
            }
          }
          if (removed) {
            return this.guestNames;
          } else {
            return "Guest not found";
          }
        }
    }
      
    updateRoomNumber(roomNumber) {
        if(typeof roomNumber === 'number') {
            this.roomNumber = roomNumber;
            return "Room number updated successfully";
        }
    }
    
    updateRoomType(roomType) {
        if(typeof roomType === 'string') {
            this.roomType = roomType;
            return "Room type updated successfully";
        }
    }

    updateDateReserved(dateReserved) {

        if (typeof dateReserved !== 'string' || !/\d{2}-\d{2}-\d{4}/.test(dateReserved)) {
          return "Date reserved must be in the format 'dd-mm-yyyy'.";
        }

        const [day, month, year] = dateReserved.split('-').map(Number);
        this.dateReserved = new Date(Date.UTC(year, month - 1, day));
    
        return this.dateReserved;
    }

}


let room1 = new Reservation(["Yash", "John"], 101, "Single", "12-12-2022");

console.log(room1)
