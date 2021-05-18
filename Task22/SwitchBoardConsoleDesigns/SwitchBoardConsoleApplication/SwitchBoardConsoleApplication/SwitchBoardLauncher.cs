using System;

namespace SwitchBoardConsoleApplication
{
    class SwitchBoardLauncher
    {
        static void Main(string[] args)
        {
            int[] appliancesCount = new int[Enum.GetValues(typeof(Appliances)).Length];
            foreach (var appliance in Enum.GetNames(typeof(Appliances)))
            {
                int applianceId = (int)Enum.Parse(typeof(Appliances), appliance);
                Console.Write($"Number of {appliance}s: ");
                appliancesCount[applianceId] = Convert.ToInt32(Console.ReadLine());
            }

            SwitchBoard dh = new SwitchBoard(new Appliances(), appliancesCount);
            
            var switches = dh.GetSwitches();
            
            Display display = new Display();
            
            display.SwitchesMenu(switches);

            while (true)
            {
                int SwitchClick = Convert.ToInt32(Console.ReadLine());

                if (SwitchClick > Switch.TotalAppliances)
                {
                    Console.WriteLine("InValid Selection");
                    continue;
                }

                int[] selectedSwitch = dh.SwitchList[SwitchClick];

                display.ConfirmMenu(switches[selectedSwitch[0]][selectedSwitch[1]], selectedSwitch[1]);

                if (Convert.ToInt32(Console.ReadLine()) == 1)
                {
                    dh.ChangeSwitchState(selectedSwitch);
                }

                display.SwitchesMenu(switches);
            }
        }
    }
}
