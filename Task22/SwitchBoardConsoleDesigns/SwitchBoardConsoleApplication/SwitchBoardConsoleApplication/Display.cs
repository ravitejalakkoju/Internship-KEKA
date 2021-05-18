using System;

namespace SwitchBoardConsoleApplication
{
    public class Display
    {
        public void SwitchesMenu(Switch[][] switches)
        {
            int serialNum = 1;
            for (int i = 0; i < switches.Length; i++)
            {
                for (int j = 0; j < switches[i].Length; j++)
                {
                    Console.WriteLine($"{serialNum++}: {switches[i][j].ConnectedAppliance} {j + 1} is {switches[i][j].GetState()}");
                }
            }
        }

        public void ConfirmMenu(Switch selectedSwitch, int applianceSerialNumber)
        {
            Console.WriteLine($"1: Switch {selectedSwitch.ConnectedAppliance} {applianceSerialNumber + 1} {(selectedSwitch.GetState().Equals("On") ? "Off" : "On")}");
            Console.WriteLine("2: Back");
        }
    }
}
