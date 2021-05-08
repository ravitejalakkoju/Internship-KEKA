namespace SwitchBoardConsoleApp.Models
{
    class Appliance
    {
        private readonly string _name;
        private readonly int _serialNumber;
        private bool _active = true;

        public Appliance(int key, int serialNumber)
        {
            _name = ApplianceDB.GetApplianceName(key);
            _serialNumber = serialNumber;
        }

        public string Name 
        {
            get => _name;
        }

        public int SerialNumber
        {
            get => _serialNumber;
        }

        public bool Active
        {
            get => _active;
            set
            {
                _active = value;
            }
        }
    }
}
