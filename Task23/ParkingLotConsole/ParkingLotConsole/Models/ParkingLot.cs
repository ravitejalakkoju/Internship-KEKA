using System.Collections.Generic;
using System.Linq;
using ParkingLotConsole.Enums;

namespace ParkingLotConsole.Models
{
    class ParkingLot
    {
        public List<ParkingSlot> ParkingSlots;

        public List<Ticket> Tickets;

        public ParkingLot(in Dictionary<Vehicle, int> parkingsPerVehicle)
        {
            this.ParkingSlots = new();

            int index = 0;

            foreach (var vehicle in parkingsPerVehicle.Keys)
            {
                int parkings = parkingsPerVehicle[vehicle];

                while(--parkings >= 0)
                {
                    this.ParkingSlots.Add(new ParkingSlot(vehicle, index++));
                }

            }

            this.Tickets = new();
        }

        public int? GetAvailableSlot(Vehicle vehicle)
        {
            int? slotNumber = ParkingSlots.Where(s => s.VehicleType == vehicle && s.AvailabilityStatus).FirstOrDefault()?.Id;

            return slotNumber;
        }

        public Ticket GenerateTicket(string vehicleNumber, int slotNumber)
        {
            int tickedId = Tickets.Count;

            return new Ticket(vehicleNumber, slotNumber, tickedId);
        }

        public void ParkVehicle(Ticket ticket)
        {
            ParkingSlots[ticket.SlotNumber].ParkVehicle(ticket.VehicleNumber);

            this.Tickets.Add(ticket);
        }

        public void UnParkVehicle(Ticket ticket)
        {
            ticket.UpdateOutTime();

            ParkingSlots[ticket.SlotNumber].UnParkVehicle();
        }

        public Ticket GetTicketFromID(int id)
        {
            return Tickets.Where(t => t.Id == id).FirstOrDefault();
        }
    }
}
