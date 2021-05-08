using System;
using System.Collections.Generic;
using System.Linq;

namespace SwitchBoardConsoleApp
{
    using SwitchBoardConsoleApp.Models;
    class SwitchBoardUI
    {
        private readonly SwitchBoard _switchBoard;

        public SwitchBoardUI()
        {
            List<string> supportedAppliances = new() { "Fan", "AC", "Bulb" };
            
            _switchBoard = new SwitchBoard(supportedAppliances);

            Console.WriteLine("SwitchBoard Console Application Ready ...");

            Dictionary<int, int> appliancesCounts = GetAppliancesCounts(supportedAppliances);

            _switchBoard.AppliancesList.AddAppliances(appliancesCounts);

            _switchBoard.AddSwitches(new List<int> (_switchBoard.AppliancesList.GetAllAppliances().Select(a => a.Key)));

            DisplaySwitchMenu();

            while (true)
            {
                int selectedSwitch = SwitchBoardUI.GetNumber();

                DisplayConfirmationMenu(selectedSwitch);

                bool confirmation = (SwitchBoardUI.GetNumber() == 1);

                _switchBoard.GetSwitch(selectedSwitch).ChangeState();

                DisplaySwitchMenu();
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

        private void DisplaySwitchMenu()
        {
            foreach (var switchId in _switchBoard.Switches.Keys)
            {
                Switch @switch = _switchBoard.GetSwitch(switchId);
                Appliance appliance = _switchBoard.AppliancesList.GetAppliance(@switch.ConnectedAppliance);
                Console.WriteLine($"{switchId}: {appliance.Name} {appliance.SerialNumber} is {(@switch.State ? "On" : "Off")}");
            }
        }

        private void DisplayConfirmationMenu(int selectedSwitch)
        {
            Switch @switch = _switchBoard.GetSwitch(selectedSwitch);
            Appliance appliance = _switchBoard.AppliancesList.GetAppliance(@switch.ConnectedAppliance);
            Console.WriteLine($"1. Switch {appliance.Name} {appliance.SerialNumber} {(!@switch.State ? "On" : "Off")}");
            Console.WriteLine($"2. Back");
        }

        private static int GetNumber()
        {
            return Convert.ToInt32(Console.ReadLine());
        }
    }
}
