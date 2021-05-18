using System.Collections.Generic;
using SwitchBoardConsole.Models;

namespace SwitchBoardConsole.Views
{
    class SwitchBoardUI
    {
        public static void Show(SwitchBoard switchBoard)
        {
            foreach (var @switch in switchBoard.Switches)
            {
                Appliance appliance = @switch.Value.ConnectedAppliance;

                Display.Show($"{@switch.Key}: {appliance.Name} {appliance.SerialNumber} is {(appliance.State ? "On": "Off")}");
            }

            int choice = Read.Choice("Select Appliance: ");

            Switch selectedSwitch = switchBoard.Switches[choice];

            Display.Menu(new Dictionary<int, string> {
                { 1, $"Switch {selectedSwitch.ConnectedAppliance.Name} {selectedSwitch.ConnectedAppliance.SerialNumber} {(!selectedSwitch.ConnectedAppliance.State ? "On" : "Off")}"},
                { 2, "Back"}
            });

            choice = Read.Choice();

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
    }
}
