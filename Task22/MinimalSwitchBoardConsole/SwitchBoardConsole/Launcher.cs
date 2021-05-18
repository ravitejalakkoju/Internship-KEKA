using SwitchBoardConsole.Views;
using SwitchBoardConsole.Logic;

namespace SwitchBoardConsole
{
    static class Launcher
    {
        static void Main(string[] args)
        {
            var CountPerAppliance = SwitchBoardUI.ReadCountPerAppliance();

            var switchBoard = SwitchBoardBusinessLogic.CreateSwitchBoard(CountPerAppliance);

            while (true)
            {
                SwitchBoardUI.ShowSwitchMenu(switchBoard);

                int choice, confirmChoice;

                while (true)
                {
                        choice = SwitchBoardUI.ReadSwitchMenuChoice() - 1;

                        if (choice >= switchBoard.Switches.Count)
                        {
                            SwitchBoardUI.ShowError(choice);
                        } 
                        else
                        {
                            while (true)
                            {
                                SwitchBoardUI.ShowConfirmMenu(switchBoard.Switches[choice]);
                                    
                                confirmChoice = SwitchBoardUI.ReadConfirmMenuChoice();

                                if (confirmChoice == 1 || confirmChoice == 2)
                                {
                                    if (confirmChoice == 1) switchBoard.Switches[choice].ChangeSwitchState();
                                    break;
                                }
                                else
                                {
                                    SwitchBoardUI.ShowError(confirmChoice);
                                }
                            }
                            break;
                        }
                }
            }
        }
    }
}
