using System.Collections.Generic;
using System.Linq;

namespace SwitchBoardConsoleApp
{
    class ApplianceDB
    {
        private static readonly IDictionary<int, string> _appliances = new Dictionary<int, string>();

        public static void GenerateMockDB()
        {
            string[] appliances = new string[] { "Fan", "AC", "Bulb" };
            UpdateApplianceDB(appliances);
        }

        public static void UpdateApplianceDB(string[] appliances)
        {
            foreach (var appliance in appliances)
            {
                if (!_appliances.Values.Contains(appliance))
                {
                    _appliances.Add(GetApplianceCount() + 1, appliance);
                }
            }
        }

        public static string GetApplianceName(int key)
        {
            return _appliances[key];
        }

        public static int GetApplianceKey(string value)
        {
            foreach(int key in _appliances.Keys)
            {
                if (_appliances[key] == value)
                {
                    return key;
                }
            }
            return 0;
        }

        public static List<int> GetKeys()
        {
            return new List<int> (_appliances.Keys);
        }

        public static List<int> GetKeys(List<string> applianceNames)
        {
            return new List<int>(_appliances.Where(a => applianceNames.Contains(a.Value)).Select(s => s.Key));
        }

        public static List<string> GetNames()
        {
            return new List<string>(_appliances.Values);
        }

        public static int GetApplianceCount()
        {
            return _appliances.Count;
        }
    }
}
