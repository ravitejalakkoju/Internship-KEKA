using ParkingLotConsole.Views;
using ParkingLotConsole.Logic;
using ParkingLotConsole.Enums;
using System;

namespace ParkingLotConsole
{
    class Launcher
    {
        static void Main(string[] args)
        {
            var parkingsPerVehicle = ParkingLotUI.ReadParkingsPerVehicle();

            var parkingLot = ParkingLotBusinessLogic.InitializeParkingLot(parkingsPerVehicle);

            while (true)
            {
                ParkingLotUI.ShowMenu();

                Choice input = (Choice) ParkingLotUI.ReadMenuChoice();

                switch (input)
                {
                    case Choice.CurrentOccupancy:
                        ParkingLotUI.ShowCurrentOccupancy(parkingLot);
                        break;
                    case Choice.ParkVehicle:
                        var vehicleType = ParkingLotUI.ReadVehicleType();

                        var availability = ParkingLotBusinessLogic.CheckAvailability(vehicleType, parkingLot);

                        if (availability is not null)
                        {
                            var vehicleNumber = ParkingLotUI.ReadVehicleNumber((int)availability);

                            ParkingLotBusinessLogic.ParkVehicle(vehicleNumber, (int) availability, parkingLot);
                        }
                        else
                        {
                            ParkingLotUI.WriteException(ParkingLotException.SlotsUnavailable);
                        };
                        break;
                    case Choice.UnParkVehicle:
                        int ticketId = ParkingLotUI.ReadTicketId();

                        Object obj = ParkingLotBusinessLogic.UnParkVehicle(ticketId, parkingLot);

                        if (obj is null) ParkingLotUI.WriteException(ParkingLotException.VehicleAlreadyLeft);
                        break;
                    default:
                        ParkingLotUI.WriteException(ParkingLotException.WrongChoice);
                        break;
                }
                ParkingLotUI.GenerateLine();
            }
        }
    }
}
