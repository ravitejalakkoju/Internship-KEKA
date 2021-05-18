using System.Collections.Generic;
using SwitchBoardConsole.Models;
using SwitchBoardConsole.DataBase;
using System;

namespace SwitchBoardConsole.Views
{
    class SwitchBoardUI
    {
        public static Dictionary<int, int> ReadAppliancesCounts()
        {
            Dictionary<int, int> applianceCounts = new();

            foreach (int key in ApplianceDB.GetKeys())
            {
                int choice = Read($"Number of {ApplianceDB.GetApplianceName(key)}s: ");

                applianceCounts.Add(key, choice);
            }

            return applianceCounts;
        }

        public static void ShowSwitchMenu(SwitchBoard switchBoard)
        {
            foreach (var @switch in switchBoard.Switches)
            {
                Appliance appliance = @switch.Value.ConnectedAppliance;

                Write($"{@switch.Key}: {appliance.Name} {appliance.SerialNumber} is {(appliance.State ? "On" : "Off")}");
            }
        }

        public static void ShowConfirmMenu(Switch selectedSwitch)
        {
            WriteMenu(new Dictionary<int, string> {
                { 1, $"Switch {selectedSwitch.ConnectedAppliance.Name} {selectedSwitch.ConnectedAppliance.SerialNumber} {(!selectedSwitch.ConnectedAppliance.State ? "On" : "Off")}"},
                { 2, "Back"}
            });
        }

        

        public static void Show(SwitchBoard switchBoard)
        {
            foreach (var @switch in switchBoard.Switches)
            {
                Appliance appliance = @switch.Value.ConnectedAppliance;

                Write($"{@switch.Key}: {appliance.Name} {appliance.SerialNumber} is {(appliance.State ? "On": "Off")}");
            }

            int choice = Read("Select Appliance: ");

            Switch selectedSwitch = switchBoard.Switches[choice];

            WriteMenu(new Dictionary<int, string> {
                { 1, $"Switch {selectedSwitch.ConnectedAppliance.Name} {selectedSwitch.ConnectedAppliance.SerialNumber} {(!selectedSwitch.ConnectedAppliance.State ? "On" : "Off")}"},
                { 2, "Back"}
            });

            choice = Read("Confirm Choice: ");

            switch (choice)
            {
                case 1:
                    selectedSwitch.ChangeState(); 
                    Show(switchBoard);
                    break;
                case 2:
                    Show(switchBoard);
                    break;
                default:
                    break;
            }
        }

        public static void Write(string message)
        {
            Console.WriteLine(message);
        }

        public static void WriteMenu(IDictionary<int, string> collection)
        {
            foreach (var key in collection.Keys)
            {
                Write($"{key}: {collection[key]}");
            }
        }

        public static int Read(string message = null)
        {
            Write(message);

            return Convert.ToInt32(Console.ReadLine());
        }
    }
}
