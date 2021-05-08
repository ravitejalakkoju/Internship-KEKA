namespace SwitchBoardConsoleApp.Models
{
    class Switch
    {
        private bool _state;
        private int _connectedApplianceId;

        public Switch(int connectedApplianceId)
        {
            _connectedApplianceId = connectedApplianceId;
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
        }

        public int ConnectedAppliance
        {
            get => _connectedApplianceId;
            set
            {
                _connectedApplianceId = value;
            }
        }
    }
}
