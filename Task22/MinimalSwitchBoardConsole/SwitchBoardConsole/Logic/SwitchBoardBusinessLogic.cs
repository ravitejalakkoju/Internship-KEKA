using System.Collections.Generic;
using SwitchBoardConsole.Models;

namespace SwitchBoardConsole.Logic
{
    static class SwitchBoardBusinessLogic
    {
        public static SwitchBoard CreateSwitchBoard(in Dictionary<Appliance, int> countPerAppliance)
        {
            SwitchBoard sb = new();

            sb.CreateSwitches(countPerAppliance);

            return sb;
        }
    }
}
