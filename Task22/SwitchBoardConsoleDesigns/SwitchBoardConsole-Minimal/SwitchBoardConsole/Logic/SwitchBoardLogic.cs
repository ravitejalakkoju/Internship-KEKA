using System.Collections.Generic;
using System.Linq;
using SwitchBoardConsole.Models;

namespace SwitchBoardConsole.Logic
{
    class SwitchBoardLogic
    {
        public static List<Appliance> CreateAppliances(Dictionary<int, int> applianceCounts)
        {
            List<Appliance> appliances = new();

            foreach (var appliance in applianceCounts)
            {
                int count = appliance.Value;
                while (--count >= 0)
                {
                    appliances.Add(new Appliance(appliance.Key));
                }
            }

            return appliances;
        }

        public static List<Switch> CreateSwitches(List<Appliance> appliances)
        {
            List<Switch> switches = new();

            foreach (var appliance in appliances)
            {
                switches.Add(new Switch(appliance));
            }

            return switches;
        }

        public static SwitchBoard CreateSwitchBoard(List<Switch> switches)
        {
            SwitchBoard sb = new();

            sb.AddSwitches(switches);

            return sb;
        }

        public static void ChangeSwitchState(Switch @switch)
        {

            @switch.ChangeState();
        }
    }
}
