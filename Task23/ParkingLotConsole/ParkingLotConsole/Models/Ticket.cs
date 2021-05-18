using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParkingLotConsole.Models
{
    class Ticket
    {
        public int Id { get; }

        public string VehicleNumber { get; }

        public int SlotNumber { get; }

        public DateTime InTime { get; }

        public DateTime? OutTime { get; set; }

        public Ticket(string vehicleNumber, int slotNumber, int id)
        {
            this.Id = id;
            this.VehicleNumber = vehicleNumber;
            this.SlotNumber = slotNumber;
            this.InTime = DateTime.Now;
        }

        public void UpdateOutTime()
        {
            this.OutTime = DateTime.Now;
        }
    }
}
