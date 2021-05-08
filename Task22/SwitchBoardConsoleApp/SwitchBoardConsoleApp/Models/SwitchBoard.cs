using System.Collections.Generic;
using System.Linq;

namespace SwitchBoardConsoleApp.Models
{
    class SwitchBoard
    {
        private readonly IDictionary<int, Switch> _switches;

        public AppliancesList AppliancesList;

        public SwitchBoard(List<string> supportedAppliances)
        {
            AppliancesList = new AppliancesList(supportedAppliances);
            _switches = new Dictionary<int, Switch>();
        }

        public IDictionary<int, Switch> Switches
        {
            get => _switches;
        }

        private int generateSwitchId()
        {
            return _switches.Count + 1;
        }

        public void AddSwitch(int applianceId)
        {
            _switches.Add(generateSwitchId(), new Switch(applianceId));
        }

        public void AddSwitch(int switchId, int applianceId)
        {
            if (_switches.ContainsKey(switchId))
                _switches[switchId] = new Switch(applianceId);
        }

        public void AddSwitches(List<int> applianceId)
        {
            foreach (var id in applianceId)
            {
                AddSwitch(id);
            }
        }

        public void AddSwitches(Dictionary<int, int> keyValuePairs)
        {
            foreach (var key in keyValuePairs.Keys)
            {
                AddSwitch(key, keyValuePairs[key]);
            }
        }

        public void RemoveSwitch(int id)
        {
            _switches.Remove(id);
        }

        public void RemoveSwitchForAppliance(int id)
        {
            _switches.Remove(GetSwitchKey(id));
        }

        public int GetSwitchKey(int applianceId)
        {
            foreach (int key in _switches.Keys)
            {
                if (_switches[key].ConnectedAppliance == applianceId)
                {
                    return key;
                }
            }
            return 0;
        }

        public Switch GetSwitch(int id)
        {
            return _switches[id];
        }

        public Switch GetSwitchForAppliance(int id)
        {
            return (Switch) _switches.Select(s => s.Value).Where(p => p.ConnectedAppliance == id);
        }

        public IDictionary<int, Switch> GetSwitchesForAppliance(int applianceKey)
        {
            return (Dictionary<int, Switch>) _switches.Select(s => s).Where(p => AppliancesList.GetAppliances(applianceKey).Contains(p.Value.ConnectedAppliance));
        }

        public bool GetSwitchState(int id)
        {
            return _switches[id].State;
        }

        public bool GetSwitchStateForAppliance (int id)
        {
            return _switches.Where(s => s.Value.ConnectedAppliance == id).Select(s => s.Value.State).First();
        }

        public Dictionary<int, bool> GetSwitchStates()
        {
            return _switches.ToDictionary(s => s.Key, s => s.Value.State);
        }

        public Dictionary<int, bool> GetSwitchStates(int applianceKey)
        {
            return _switches.Where(s => ApplianceDB.GetApplianceKey(AppliancesList.GetAppliance(s.Value.ConnectedAppliance).Name) == applianceKey)
                            .ToDictionary(s => s.Key, s => s.Value.State);
        }

        public void OffAllSwitches()
        {
            foreach (var switchId in _switches.Keys)
            {
                _switches[switchId].State = false;
            }
        }

        public void OnAllSwitches()
        {
            foreach (var switchId in _switches.Keys)
            {
                _switches[switchId].State = true;
            }
        }
    }
}
