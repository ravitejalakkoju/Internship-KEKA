using System.Collections.Generic;
using System.Linq;
using System;

namespace SwitchBoardConsole.DataBase
{
    class ApplianceDB
    {
        private enum Appliances { 
            Fan,
            AC,
            Bulb
        };

        public static Enum AppliancesList;

        public static void GenerateMockDB()
        {
            AppliancesList = new Appliances();
        }

        public static Enum GetAppliancesList()
        {
            return AppliancesList;
        }

        public static string GetApplianceName(int key)
        {
            return Enum.GetName(AppliancesList.GetType(), key);
        }

        public static int GetApplianceKey(string name)
        {
            foreach (int key in Enum.GetValues(AppliancesList.GetType()))
            {
                if (GetApplianceName(key) == name)
                {
                    return key;
                }
            }
            return 0;
        }

        public static List<int> GetKeys()
        {
            List<int> keys = new();
            
            foreach (int key in Enum.GetValues(AppliancesList.GetType()))
            {
                keys.Add(key);
            }

            return keys;
        }

        public static List<string> GetNames()
        {
            return new List<string>(Enum.GetNames(AppliancesList.GetType()));
        }

        public static Enum GetAppliances()
        {
            return AppliancesList;
        }

        public static int GetApplianceCount()
        {
            return Enum.GetValues(AppliancesList.GetType()).Length;
        }
    }
}
