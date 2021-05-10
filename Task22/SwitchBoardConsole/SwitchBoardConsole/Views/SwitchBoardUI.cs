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

            int choice = Read.Choice();

            Switch selectedSwitch = switchBoard.Switches[choice];

            Display.Menu(new Dictionary<int, string> {
                { 1, $"Switch {selectedSwitch.ConnectedAppliance.Name} {selectedSwitch.ConnectedAppliance.SerialNumber} {(!selectedSwitch.ConnectedAppliance.State ? "On" : "Off")}"},
                { 2, "Back"}
            });

            choice = Read.Choice();

            if(choice == 1) selectedSwitch.ChangeState();

            Show(switchBoard);
        }
    }
}
