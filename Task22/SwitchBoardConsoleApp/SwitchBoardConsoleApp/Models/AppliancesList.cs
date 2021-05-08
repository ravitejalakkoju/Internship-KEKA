using System.Collections.Generic;
using System.Linq;
using System;

namespace SwitchBoardConsoleApp.Models
{
    class AppliancesList
    {
        private readonly IDictionary<int, Appliance> _appliances;

        private readonly Dictionary<int, int> _applianceCount;

        private readonly List<string> _supportedAppliances;

        public AppliancesList(List<string> supportedAppliances)
        {
            _supportedAppliances = supportedAppliances;

            _applianceCount = new Dictionary<int, int>();

            foreach (var key in ApplianceDB.GetKeys())
            {
                _applianceCount.Add(key, 0);
            }

            _appliances = new Dictionary<int, Appliance>();
        }

        private int GenerateApplianceId()
        {
            return GetAppliancesCount();
        }

        public void AddAppliance(int key)
        {
            try
            {
                if (_supportedAppliances.Contains(ApplianceDB.GetApplianceName(key)))
                {
                    int serialNumber = ++_applianceCount[key];
                    _appliances.Add(GenerateApplianceId(), new Appliance(key, serialNumber));
                } 
                else
                {
                    throw new Exception("SwitchBoard does not support this Appliance");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception Caught: {0}", e);
            }
            
        }

        public void AddAppliancesFor(int key, int count)
        {
            while (--count >= 0)
            {
                AddAppliance(key);
            }
        }

        public void AddAppliances(Dictionary<int, int> appliancesCounts)
        {
            foreach (int key in appliancesCounts.Keys)
            {
                AddAppliancesFor(key, appliancesCounts[key]);
            }
        }

        public Appliance GetAppliance(int id)
        {
            return _appliances[id];
        }

        public Appliance GetAppliance(string name, int serialNum)
        {
            return (Appliance) _appliances.Select(a => a.Value).Where(p => p.SerialNumber == serialNum && p.Name == name);
        }

        public List<int> GetAppliances(int key)
        {
            return (List<int>) _appliances.Select(a => a).Where(p => p.Value.Name == ApplianceDB.GetApplianceName(key)).Select(a => a.Key);
        }

        public IDictionary<int, Appliance> GetAllAppliances()
        {
            return _appliances;
        }

        public int GetApplianceCount(int key)
        {
            return _applianceCount[key];
        }

        public int GetAppliancesCount()
        {
            return _appliances.Count;
        }

        public Dictionary<int, int> GetAppliancesCount(int key)
        {
            return _applianceCount;
        }

        public List<Appliance> GetActiveAppliances()
        {
            return (List<Appliance>) _appliances.Select(a => a.Value).Where(p => p.Active);
        }

        public List<Appliance> GetInActiveAppliances()
        {
            return (List<Appliance>) _appliances.Select(a => a.Value).Where(p => !p.Active);
        }
    }
}
