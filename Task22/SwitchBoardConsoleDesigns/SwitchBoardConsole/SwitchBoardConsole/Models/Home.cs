using System.Collections.Generic;

namespace SwitchBoardConsole.Models
{
    class Home
    {
        private readonly string _doorNumber;

        private readonly IDictionary<int, Room> _rooms;

        public Home(string doorNumber)
        {
            _doorNumber = doorNumber;
            _rooms = new Dictionary<int, Room>();
        }

        public string DoorNumber
        {
            get => _doorNumber;
        }

        public IDictionary<int, Room> Rooms
        {
            get => _rooms;
        }

        private int GenerateRoomKey()
        {
            return _rooms.Count;
        }

        public void AddRoom(Room room)
        {
            int key = GenerateRoomKey();
            _rooms.Add(key, room);
        }

        public void AddRooms(List<Room> rooms)
        {
            foreach (var room in rooms)
            {
                AddRoom(room);
            }
        }
    }
}
