export class Booking{
    constructor(
        public bookingId: number=0,
        public statusBooking: string="",
        public bookingDate:Date=new Date(),
        public cancelDate:Date=new Date()
    ){}
}