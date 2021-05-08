namespace SwitchBoardConsoleApplication
{
	public class Switch : ISwitchable
	{
		public string ConnectedAppliance;
		private bool state = false;
		public static int TotalAppliances = 0; // 
		public Switch(string applianceName)
		{
			ConnectedAppliance = applianceName;
			TotalAppliances++;
		}
		public void ChangeState()
		{
			state = !state;
		}
		public string GetState()
		{
			return (state ? "On" : "Off"); //
		}
	}
}

