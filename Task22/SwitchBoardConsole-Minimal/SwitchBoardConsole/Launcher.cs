using SwitchBoardConsole.Views;
using SwitchBoardConsole.Logic;
using SwitchBoardConsole.DataBase;

namespace SwitchBoardConsole
{
    class Launcher
    {
        static void Main(string[] args)
        {
            ApplianceDB.GenerateMockDB();

            var appliancesCounts = SwitchBoardUI.ReadAppliancesCounts();

            var appliances = SwitchBoardLogic.CreateAppliances(appliancesCounts);

            var switches = SwitchBoardLogic.CreateSwitches(appliances);

            var switchBoard = SwitchBoardLogic.CreateSwitchBoard(switches);

            SwitchBoardUI.Show(switchBoard);
        }
    }
}
