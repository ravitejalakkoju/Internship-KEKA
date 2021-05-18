using System;
using System.Collections.Generic;
using System.Linq;
using ParkingLotConsole.Enums;
using ParkingLotConsole.Models;

namespace ParkingLotConsole.Logic
{
    static class ParkingLotBusinessLogic
    {
        public static ParkingLot InitializeParkingLot(in Dictionary<Vehicle, int> parkingsPerVehicle)
        {
            return new ParkingLot(parkingsPerVehicle);
        }

        public static int? CheckAvailability(Vehicle type, ParkingLot parkingLot)
        {
            if (Enum.GetValues(typeof(Vehicle)).Cast<Vehicle>().Contains(type))
            {
                return parkingLot.GetAvailableSlot(type);
            }
            else
            {
                return null;
            }
            
        }

        public static Ticket ParkVehicle(string vehicleNumber, int slotNumber, ParkingLot parkingLot)
        {
            Ticket ticket = parkingLot.GenerateTicket(vehicleNumber, slotNumber);

            parkingLot.ParkVehicle(ticket);

            return ticket;
        }

        public static Ticket UnParkVehicle(int tickedId, ParkingLot parkingLot)
        {
            Ticket ticket = parkingLot.GetTicketFromID(tickedId);

            if (ticket.OutTime is null)
            {
                parkingLot.UnParkVehicle(ticket);

                return ticket;
            }
            else
            {
                return null;
            }
        }
    }
}
