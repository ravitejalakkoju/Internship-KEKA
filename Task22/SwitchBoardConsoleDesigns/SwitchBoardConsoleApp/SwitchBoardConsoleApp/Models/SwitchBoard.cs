using System.Collections.Generic;
using System.Linq;

namespace SwitchBoardConsoleApp.Models
{
    class SwitchBoard
    {
        private readonly IDictionary<int, Switch> _switches;

        private readonly AppliancesList _appliancesList;

        public SwitchBoard(AppliancesList appliancesList)
        {
            _switches = new Dictionary<int, Switch>();
            _appliancesList = appliancesList;
        }

        public IDictionary<int, Switch> Switches
        {
            get => _switches;
        }

        private int GenerateSwitchId()
        {
            return _switches.Count + 1;
        }

        public void AddSwitch(Appliance appliance)
        {
            _switches.Add(GenerateSwitchId(), new Switch(appliance));
        }

        public void AddSwitch(int switchId, Appliance appliance)
        {
            if (_switches.ContainsKey(switchId))
                _switches[switchId] = new Switch(appliance);
        }

        public void AddSwitches(List<Appliance> appliances)
        {
            foreach (var appliance in appliances)
            {
                AddSwitch(appliance);
            }
        }

        public void AddSwitches(Dictionary<int, Appliance> keyValuePairs)
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
                if (_switches[key].ConnectedAppliance.Equals(_appliancesList.GetAppliance(applianceId)))
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
            return (Switch) _switches.Select(s => s.Value).Where(p => p.ConnectedAppliance.Equals(_appliancesList.GetAppliance(id)));
        }

        public IDictionary<int, Switch> GetSwitchesForAppliance(string applianceName)
        {
            return (Dictionary<int, Switch>) _switches.Select(s => s).Where(p => _appliancesList.GetAppliances(applianceName).Contains(p.Value.ConnectedAppliance));
        }

        public bool GetSwitchState(int id)
        {
            return _switches[id].State;
        }

        public bool GetSwitchStateForAppliance (int id)
        {
            return _switches.Where(s => s.Value.ConnectedAppliance == _appliancesList.GetAppliance(id)).Select(s => s.Value.State).First();
        }

        public Dictionary<int, bool> GetSwitchStates()
        {
            return _switches.ToDictionary(s => s.Key, s => s.Value.State);
        }

        public Dictionary<int, bool> GetSwitchStates(int applianceKey)
        {
            return _switches.Where(s =>s.Value.ConnectedAppliance.Key == applianceKey)
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
