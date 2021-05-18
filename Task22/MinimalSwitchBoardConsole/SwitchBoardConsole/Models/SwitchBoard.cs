using System.Collections.Generic;
using System;

namespace SwitchBoardConsole.Models
{
    class SwitchBoard
    {
        public List<Switch> Switches { get; }

        public Dictionary<Appliance, int> SwitchesPerAppliance { get; }

        public SwitchBoard()
        {
            Switches = new List<Switch>();

            SwitchesPerAppliance = new Dictionary<Appliance, int>();

            foreach (var applianceId in Enum.GetValues(typeof(Appliance)))
            {
                SwitchesPerAppliance.Add((Appliance) applianceId, 0);
            }
        }

        public void CreateSwitch(Appliance appliance)
        {
            Switch @switch = new(appliance, ++SwitchesPerAppliance[appliance]);
            Switches.Add(@switch);
        }

        public void CreateSwitches(in Dictionary<Appliance, int> CountPerAppliance)
        {
            foreach (Appliance appliance in CountPerAppliance.Keys)
            {
                int count = CountPerAppliance[appliance];
                while(--count >= 0)
                {
                    CreateSwitch(appliance);
                }
            }
        }
    }
}
