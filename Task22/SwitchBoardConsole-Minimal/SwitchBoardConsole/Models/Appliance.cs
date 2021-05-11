using System;
using SwitchBoardConsole.DataBase;

namespace SwitchBoardConsole.Models
{
    class Appliance
    {
        private readonly int _id;
        private readonly string _name;
        private int _serialNumber;
        private bool _state = false;

        public Appliance(int id)
        {
            _id = id;
            _name = ApplianceDB.GetApplianceName(id);
        }

        public void ChangeState()
        {
            _state = !_state;
        }

        public int Id
        {
            get => _id;
        }

        public string Name
        {
            get => _name;
        }

        public int SerialNumber
        {
            get => _serialNumber;
            set
            {
                _serialNumber = value;
            }
        }

        public bool State
        {
            get => _state;
            set
            {
                _state = value;
            }
        }
    }
}
