using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SwitchBoardConsoleApp.Models
{
    class Room
    {
        public AppliancesList AppliancesList;

        private readonly List<SwitchBoard> _switchBoards;

        public Room(List<int> supportedAppliances)
        {
            AppliancesList = new AppliancesList(supportedAppliances);

            _switchBoards = new();
        }

        public SwitchBoard AddSwitchBoard()
        {
            SwitchBoard switchBoard = new SwitchBoard(AppliancesList);
            _switchBoards.Add(switchBoard);

            return switchBoard;
        }

        public List<SwitchBoard> AddSwitchBoards(int count)
        {
            List<SwitchBoard> switchBoards = new();
            while(--count >= 0)
            {
                switchBoards.Add(new SwitchBoard(AppliancesList));
            }

            _switchBoards.AddRange(switchBoards);

            return switchBoards;
        }

        public SwitchBoard GetSwitchBoard(int id)
        {
            return _switchBoards[id];
        }

        public List<SwitchBoard> GetSwitchBoards(int start, int end)
        {
            return _switchBoards.GetRange(start, end);
        }
    }
}
