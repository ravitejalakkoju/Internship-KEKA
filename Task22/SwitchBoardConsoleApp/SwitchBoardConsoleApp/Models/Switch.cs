namespace SwitchBoardConsoleApp.Models
{
    class Switch
    {
        private bool _state;
        private readonly Appliance _connectedAppliance;

        public Switch(Appliance connectedAppliance)
        {
            _connectedAppliance = connectedAppliance;
            _state = false;
        }

        public bool State
        {
            get => _state;
            set
            {
                _state = value;
            }
        }

        public void ChangeState()
        {
            _state = !_state;
            _connectedAppliance.ChangeState();
        }

        public Appliance ConnectedAppliance
        {
            get => _connectedAppliance;
        }
    }
}
