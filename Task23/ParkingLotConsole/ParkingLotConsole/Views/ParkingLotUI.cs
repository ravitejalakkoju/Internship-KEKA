using System;
using System.Collections.Generic;
using System.Linq;
using ParkingLotConsole.Models;
using ParkingLotConsole.Enums;

namespace ParkingLotConsole.Views
{
    static class ParkingLotUI
    {
        public static Dictionary<Vehicle, int> ReadParkingsPerVehicle()
        {
            Dictionary<Vehicle, int> parkingsPerVehicle = new();

            foreach (var vehicle in Enum.GetValues(typeof(Vehicle)).Cast<Vehicle>())
            {
                int numberOfParkings = Convert.ToInt32(Read($"Enter Number of {Enum.GetName(vehicle)} Vehicle Parkings:"));

                parkingsPerVehicle.Add(vehicle, numberOfParkings);
            }

            return parkingsPerVehicle;
        }

        public static void ShowMenu()
        {
            Write("\n");

            Write($"1: Show Current Parking Occupancy \n" +
                  $"2: Park Vehicle \n" +
                  $"3: UnPark Vechicle");
        }

        public static int ReadMenuChoice()
        {
            return Convert.ToInt32(Read("Enter your choice:"));
        }

        public static void ShowCurrentOccupancy(ParkingLot parkingLot)
        {
            int index = 0;

            Write("\n");

            parkingLot.ParkingSlots.ForEach(ps => Write($"{index++}: {ps.VehicleType} - {(ps.AvailabilityStatus ? "Empty" : "Filled")} - {ps.VehicleNumber}"));
        }

        public static Vehicle ReadVehicleType()
        {
            Write("\n");

            foreach (var vehicle in Enum.GetValues(typeof(Vehicle)).Cast<Vehicle>())
            {
                Write($"{(int) vehicle}: {Enum.GetName(vehicle)}");
            }

            int type = Convert.ToInt32(Read($"Please select your vehicle type:"));

            return (Vehicle)type;
        }

        public static string ReadVehicleNumber(int availability)
        {
            Write("\n");

            return Read($"Slot Available at {availability}, \n" +
                $"Please enter your vehicle number to Fill the Slot and Generate the Ticket");
        }

        public static void ShowTicket(Ticket ticket)
        {
            Write("\n");

            Write($"Ticket Id: {ticket.Id} \n" +
                $"Slot Number: {ticket.SlotNumber} \n" +
                $"Vehicle Number: {ticket.SlotNumber} \n" +
                $"InTime: {ticket.InTime} \n" +
                $"OutTime: {((ticket.OutTime is not null) ? ticket.OutTime : "Vehicle Still Parked")}");
        }

        public static int ReadTicketId()
        {
            return Convert.ToInt32(Read("Enter Your Ticket ID: "));
        }

        public static string Read(string message)
        {
            Write(message);

            return Console.ReadLine();
        }

        public static void Write(string message)
        {
            if (!String.IsNullOrEmpty(message)) Console.WriteLine(message);
        }


        public static void WriteException(ParkingLotException ple)
        {
            Write(Enum.GetName(ple));
        }

        public static void GenerateLine()
        {
            Write("___________________________________________________________________________________________________________");
        }
    }
}
