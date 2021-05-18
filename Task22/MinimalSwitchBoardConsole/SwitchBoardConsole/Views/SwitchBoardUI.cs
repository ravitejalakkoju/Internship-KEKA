using System.Collections.Generic;
using SwitchBoardConsole.Models;
using System;

namespace SwitchBoardConsole.Views
{
    static class SwitchBoardUI
    {
        public static Dictionary<Appliance, int> ReadCountPerAppliance()
        {
            Dictionary<Appliance, int> countPerAppliance = new();

            foreach (int id in Enum.GetValues(typeof(Appliance)))
            {
                int count = Read($"Number of {Enum.GetName(typeof(Appliance), id)}s: ");

                countPerAppliance.Add((Appliance) id, count);
            }

            return countPerAppliance;
        }

        public static void ShowSwitchMenu(SwitchBoard switchBoard)
        {
            int SerialNumber = 1;
            foreach (var @switch in switchBoard.Switches)
            {
                Write($"{SerialNumber++}: {Enum.GetName(@switch.Appliance)} {@switch.SerialNumber} is {(@switch.State ? "On" : "Off")}");
            }
        }

        public static void ShowConfirmMenu(Switch selectedSwitch)
        {
            Write($"1: Switch {Enum.GetName(selectedSwitch.Appliance)} {selectedSwitch.SerialNumber} {(!selectedSwitch.State ? "On" : "Off")}");
            Write("2: Back");
        }

        public static void ShowError(int choice)
        {
            Write($"In-valid choice (i.e, {choice}) is selected, please select valid choice");
        }

        public static int ReadSwitchMenuChoice()
        {
            return Read("Select Appliance: ");
        }

        public static int ReadConfirmMenuChoice()
        {
            return Read("Confirm Choice: ");
        }

        public static void Write(string message)
        {
            Console.WriteLine(message);
        }

        public static int Read(string message = null)
        {
            if(message is not null) Write(message); //

            return Convert.ToInt32(Console.ReadLine());
        }
    }
}
