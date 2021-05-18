namespace SwitchBoardConsole.Models
{
    class Switch
    {
        private Appliance _connectedAppliance;

        public Switch(Appliance connectedAppliance)
        {
            _connectedAppliance = connectedAppliance;
        }

        public bool State
        {
            get => _connectedAppliance.State;
            set
            {
                _connectedAppliance.State = value;
            }
        }

        public void ChangeState()
        {
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
