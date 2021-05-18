using SwitchBoardConsole.Views;
using SwitchBoardConsole.Logic;
using SwitchBoardConsole.DataBase;
using System;

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

            SwitchBoardConsole: 
                SwitchBoardUI.ShowSwitchMenu(switchBoard);

                int choice;

                SwitchMenuChoice:
                    try
                    {
                        choice = SwitchBoardUI.Read("Select Appliance: ");

                        SwitchBoardUI.ShowConfirmMenu(switchBoard.Switches[choice]);

                        if (!switchBoard.Switches.Keys.Contains(choice))
                        {
                            throw new Exception($"In-valid choice selected, please select valid choice");
                        }
                    } catch(Exception e)
                    {
                        SwitchBoardUI.Write(e.Message);
                        goto SwitchMenuChoice;
                    }
                
                ConfirmMenuChoice:
                    int confirmChoice = SwitchBoardUI.Read("Confirm Choice: ");

                    if (confirmChoice == 1 || confirmChoice == 2)
                    {
                        if(confirmChoice == 1) SwitchBoardLogic.ChangeSwitchState(switchBoard.Switches[choice]);

                        goto SwitchBoardConsole;
                    }

                    else
                    {
                        SwitchBoardUI.Write($"In-valid choice (i.e,{confirmChoice}) is selected, please select valid choice");
                        goto ConfirmMenuChoice;
                    }
        }
    }
}
