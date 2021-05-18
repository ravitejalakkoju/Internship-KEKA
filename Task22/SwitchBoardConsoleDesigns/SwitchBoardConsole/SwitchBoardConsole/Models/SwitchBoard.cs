using System.Collections.Generic;
using System.Linq;

namespace SwitchBoardConsole.Models
{
    class SwitchBoard
    {
        private readonly IDictionary<int, Switch> _switches;

        public SwitchBoard()
        {
            _switches = new Dictionary<int, Switch>();
        }

        public IDictionary<int, Switch> Switches
        {
            get => _switches;
        }

        private int GenerateSwitchKey()
        {
            return _switches.Count + 1;
        }

        public void AddSwitch(Switch @switch)
        {
            int key = GenerateSwitchKey();
            _switches.Add(key, @switch);
        }

        public void AddSwitch(int switchId, Switch @switch)
        {
            if (_switches.ContainsKey(switchId))
                _switches[switchId] = @switch;
        }

        public void AddSwitches(List<Switch> switches)
        {
            foreach (var @switch in switches)
            {
                AddSwitch(@switch);
            }
        }

        public void AddSwitches(Dictionary<int, Switch> keySwitchPairs)
        {
            foreach (var key in keySwitchPairs.Keys)
            {
                AddSwitch(key, keySwitchPairs[key]);
            }
        }

        public void RemoveSwitch(int switchKey)
        {
            _switches.Remove(switchKey);
        }

        public void RemoveSwitchForAppliance(Appliance appliance)
        {
            int switchKey = GetSwitchKey(appliance);
            _switches.Remove(switchKey);
        }

        public int GetSwitchKey(Appliance appliance)
        {
            return _switches.Where(p => p.Value.ConnectedAppliance.Equals(appliance)).Select(s => s.Key).First();
        }

        public Switch GetSwitch(int key)
        {
            return _switches[key];
        }

        public Switch GetSwitchForAppliance(Appliance appliance)
        {
            return _switches.Select(s => s.Value).Where(p => p.ConnectedAppliance.Equals(appliance)).First();
        }

        public IDictionary<int, Switch> GetSwitchesForAppliance(string applianceName)
        {
            return (Dictionary<int, Switch>) _switches.Select(s => s).Where(p => p.Value.ConnectedAppliance.Name.Equals(applianceName));
        }

        public bool GetSwitchState(int key)
        {
            return _switches[key].State;
        }

        public Dictionary<int, bool> GetSwitchStates()
        {
            return _switches.ToDictionary(s => s.Key, s => s.Value.State);
        }

        public Dictionary<int, bool> GetSwitchStates(int applianceId)
        {
            return _switches.Where(s => s.Value.ConnectedAppliance.Id == applianceId)
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
