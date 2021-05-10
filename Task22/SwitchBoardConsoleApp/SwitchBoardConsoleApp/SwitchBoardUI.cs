using System;
using System.Collections.Generic;
using System.Linq;

namespace SwitchBoardConsoleApp
{
    using SwitchBoardConsoleApp.Models;
    class SwitchBoardUI
    {
        private readonly Room _room;

        public SwitchBoardUI()
        {
            List<string> supportedAppliances = new() { "Fan", "AC", "Bulb" };

            _room = new Room(new List<int> (supportedAppliances.Select(s => ApplianceDB.GetApplianceKey(s))));

            Console.WriteLine("SwitchBoard Console Application Ready ...");

            Dictionary<int, int> appliancesCounts = GetAppliancesCounts(supportedAppliances);

            _room.AppliancesList.AddAppliances(appliancesCounts);

            _room.AddSwitchBoard();

            SwitchBoard sb = _room.GetSwitchBoard(0);

            sb.AddSwitches(new List<Appliance> (_room.AppliancesList.GetAllAppliances().Select(a => a.Value)));

            DisplaySwitchMenu(sb);

            while (true)
            {
                int selectedSwitch = SwitchBoardUI.GetNumber();

                DisplayConfirmationMenu(sb, selectedSwitch);

                bool confirmation = (SwitchBoardUI.GetNumber() == 1);

                sb.GetSwitch(selectedSwitch).ChangeState();

                DisplaySwitchMenu(sb);
            }
        }

        private static Dictionary<int, int> GetAppliancesCounts()
        {
            Dictionary<int, int> appliancesCounts = new();
            foreach (var key in ApplianceDB.GetKeys())
            {
                Console.WriteLine($"Number of {ApplianceDB.GetApplianceName(key)}s: ");
                int count = GetNumber();
                appliancesCounts.Add(key, count);
            }

            return appliancesCounts;
        }

        private static Dictionary<int, int> GetAppliancesCounts(List<string> supportedAppliances)
        {
            Dictionary<int, int> appliancesCounts = new();
            foreach (var key in ApplianceDB.GetKeys(supportedAppliances))
            {
                Console.WriteLine($"Number of {ApplianceDB.GetApplianceName(key)}s: ");
                int count = GetNumber();
                appliancesCounts.Add(key, count);
            }

            return appliancesCounts;
        }

        private void DisplaySwitchMenu(SwitchBoard switchBoard)
        {
            foreach (var switchId in switchBoard.Switches.Keys)
            {
                Switch @switch = switchBoard.GetSwitch(switchId);
                Appliance appliance = @switch.ConnectedAppliance;
                Console.WriteLine($"{switchId}: {appliance.Name} {appliance.SerialNumber} is {(appliance.State ? "On" : "Off")}");
            }
        }

        private void DisplayConfirmationMenu(SwitchBoard switchBoard, int selectedSwitch)
        {
            Switch @switch = switchBoard.GetSwitch(selectedSwitch);
            Appliance appliance = @switch.ConnectedAppliance;
            Console.WriteLine($"1. Switch {appliance.Name} {appliance.SerialNumber} {(!appliance.State ? "On" : "Off")}");
            Console.WriteLine($"2. Back");
        }

        private static int GetNumber()
        {
            return Convert.ToInt32(Console.ReadLine());
        }
    }
}
