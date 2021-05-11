namespace SwitchBoardConsole.Models
{
    class Switch
    {
        private bool _state;
        private Appliance _connectedAppliance;

        public Switch(Appliance connectedAppliance)
        {
            _connectedAppliance = connectedAppliance;
        }

        public bool State
        {
            get => _state;
            set
            {
                _state = value;
                _connectedAppliance.State = value;
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
            set
            {
                _connectedAppliance = value;
            }
        }
    }
}
