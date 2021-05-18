namespace SwitchBoardConsole.Models
{
    class Switch
    {
        public bool State { get; set; }

        public Appliance Appliance { get; set; }

        public int SerialNumber { get; set; }

        public Switch(Appliance appliance, int serialNumber)
        {
            State = false;
            Appliance = appliance;
            SerialNumber = serialNumber;
        }

        public void ChangeSwitchState()
        {
            State = !State;
        }
    }
}
