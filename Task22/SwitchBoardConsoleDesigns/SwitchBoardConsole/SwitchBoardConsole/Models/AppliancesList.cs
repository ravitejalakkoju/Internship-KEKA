using System;
using System.Collections.Generic;
using System.Linq;
using SwitchBoardConsole.DataBase;

namespace SwitchBoardConsole.Models
{
    class AppliancesList
    {
        private readonly List<int> _supportedAppliances;

        private readonly Dictionary<int, Appliance> _appliances;

        private readonly Dictionary<int, int> _applianceCounts;

        public AppliancesList(List<int> supportedAppliances)
        {
            _supportedAppliances = supportedAppliances;

            _appliances = new Dictionary<int, Appliance>();

            _applianceCounts = new Dictionary<int, int>();

            foreach (var applianceId in supportedAppliances)
            {
                _applianceCounts.Add(applianceId, 1);
            }
        }

        private int GenerateApplianceKey()
        {
            return _appliances.Count();
        }

        public void AddAppliance(Appliance appliance)
        {
            int key = GenerateApplianceKey();
            try
            {
                if (_supportedAppliances.Contains(appliance.Id))
                {
                    appliance.SerialNumber = _applianceCounts[appliance.Id];
                    _appliances.Add(key, appliance);
                    _applianceCounts[appliance.Id]++;
                } 
                else
                {
                    throw new Exception("This Room does not support this Appliance");
                }
            } catch (Exception e)
            {
                Console.WriteLine(e); //
            }
        }

        public void AddAppliances(List<Appliance> appliances)
        {
            foreach (var appliance in appliances)
            {
                AddAppliance(appliance);
            }
        }

        public List<int> GetApplianceKeys()
        {
            return new List<int>(_appliances.Keys);
        }

        public Appliance GetAppliance(int key)
        {
            return _appliances[key];
        }

        public Appliance GetAppliance(string name, int serialNum)
        {
            return (Appliance)_appliances.Select(a => a.Value).Where(p => p.SerialNumber == serialNum && p.Name == name);
        }

        public List<Appliance> GetAppliances(string name)
        {
            int key = ApplianceDB.GetApplianceKey(name);
            return (List<Appliance>)_appliances.Select(a => a).Where(p => p.Value.Name == ApplianceDB.GetApplianceName(key)).Select(a => a.Value);
        }

        public IDictionary<int, Appliance> GetAllAppliances()
        {
            return _appliances;
        }

        public int GetAppliancesCount()
        {
            return _appliances.Count;
        }

        public int GetApplianceCount(int id)
        {
            return _applianceCounts[id];
        }

        public Dictionary<int, int> GetApplianceCounts()
        {
            return _applianceCounts;
        }

        public List<Appliance> GetActiveAppliances()
        {
            return (List<Appliance>)_appliances.Select(a => a.Value).Where(p => p.State);
        }

        public List<Appliance> GetInActiveAppliances()
        {
            return (List<Appliance>)_appliances.Select(a => a.Value).Where(p => !p.State);
        }
    }
}
