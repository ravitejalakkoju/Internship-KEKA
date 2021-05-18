namespace SwitchBoardConsoleApp.Models
{
    class Appliance
    {
        private readonly int _key;
        private readonly string _name;
        private readonly int _serialNumber;
        private bool _state = false;

        public Appliance(int key, int serialNumber)
        {
            _key = key;
            _name = ApplianceDB.GetApplianceName(key);
            _serialNumber = serialNumber;
        }

        public void ChangeState()
        {
            _state = !_state;
        }

        public int Key
        {
            get => _key;
        }

        public string Name 
        {
            get => _name;
        }

        public int SerialNumber
        {
            get => _serialNumber;
        }

        public bool State
        {
            get => _state;
            set
            {
                _state = value;
            }
        }

        public bool Active
        {
            get => _state;
        }
    }
}
