using System;
using System.Collections.Generic;

namespace SwitchBoardConsoleApplication
{
	public class SwitchBoard
	{
		private Switch[][] switches; //
		public IDictionary<int, int[]> SwitchList = new Dictionary<int, int[]>();
		private Enum _appliancesEnum;
		public SwitchBoard(Enum Appliances, int[] applianceCount)
		{
			_appliancesEnum = Appliances;
			switches = new Switch[Enum.GetValues(_appliancesEnum.GetType()).Length][];
			foreach (var appliance in Enum.GetNames(_appliancesEnum.GetType()))
			{
				int applianceId = (int)Enum.Parse(_appliancesEnum.GetType(), appliance);
				switches[applianceId] = new Switch[applianceCount[applianceId]];
			}
			createSwitches();
		}
		private void createSwitches() //
		{
			foreach (var appliance in Enum.GetNames(_appliancesEnum.GetType()))
			{
				int applianceId = (int)Enum.Parse(_appliancesEnum.GetType(), appliance);
				for (var serialNumber = 0; serialNumber < switches[applianceId].Length; serialNumber++)
				{
					switches[applianceId][serialNumber] = new Switch(appliance);
					SwitchList.Add(Switch.TotalAppliances, new int[] { applianceId, serialNumber });
				}
			}
		}
		public Switch[][] GetSwitches()
		{
			return switches;
		}
		public void ChangeSwitchState(int[] selectedSwitch)
		{
			switches[selectedSwitch[0]][selectedSwitch[1]].ChangeState();
		}
	}
}
