using System.Collections.Generic;

namespace SwitchBoardConsole.Models
{
    class Room
    {
        private string _roomName;

        private readonly AppliancesList _appliancesList;

        private readonly IDictionary<int, SwitchBoard> _switchBoards;

        public Room(string roomName, List<int> supportedAppliances)
        {
            _roomName = roomName;

            _appliancesList = new AppliancesList(supportedAppliances);

            _switchBoards = new Dictionary<int, SwitchBoard>();
        }

        public string RoomName
        {
            get => _roomName;

            set
            {
                _roomName = value;
            }
        }

        public AppliancesList AppliancesList
        {
            get => _appliancesList;
        }

        public IDictionary<int, SwitchBoard> SwitchBoards
        {
            get => _switchBoards;
        }

        private int GenerateSwitchBoardKey()
        {
            return _switchBoards.Count;
        }

        public void AddSwitchBoard(SwitchBoard switchBoard)
        {
            int key = GenerateSwitchBoardKey();
            _switchBoards.Add(key, switchBoard);
        }

        public void AddSwitchBoards(List<SwitchBoard> switchBoards)
        {
            foreach (var switchBoard in switchBoards)
            {
                AddSwitchBoard(switchBoard);
            }
        }

        public SwitchBoard GetSwitchBoard(int key)
        {
            return _switchBoards[key];
        }
    }
}
