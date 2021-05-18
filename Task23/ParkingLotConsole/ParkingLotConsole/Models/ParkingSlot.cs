using ParkingLotConsole.Enums;

namespace ParkingLotConsole.Models
{
    class ParkingSlot
    {
        public int Id { get; set; }

        public Vehicle VehicleType { get; set; }

        public bool AvailabilityStatus { get; set; }

        public string VehicleNumber { get; set; }

        public ParkingSlot(Vehicle type, int id)
        {
            this.Id = id;

            this.VehicleType = type;

            this.AvailabilityStatus = true;

            this.VehicleNumber = null;
        }

        public void ChangeVehicleType(Vehicle type)
        {
            this.VehicleType = type;
        }

        private void ChangeVehicleNumber(string vehicleNumber)
        {
            this.VehicleNumber = vehicleNumber;
        }

        private void ChangeAvailabilityStatus()
        {
            this.AvailabilityStatus = !AvailabilityStatus;
        }

        private void ChangeParkingSlotStatus(string vehicleNumber)
        {
            this.ChangeAvailabilityStatus();

            this.ChangeVehicleNumber(vehicleNumber);
        }

        public void ParkVehicle(string vehicleNumber)
        {
            ChangeParkingSlotStatus(vehicleNumber);
        }

        public void UnParkVehicle()
        {
            ChangeParkingSlotStatus(null);
        }
    }
}
