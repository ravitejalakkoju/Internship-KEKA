using System.Collections.Generic;
using SwitchBoardConsole.DataBase;
using SwitchBoardConsole.Models;

namespace SwitchBoardConsole.Views
{
    class ConsoleUI
    {
        public static Home _home;
        public ConsoleUI()
        {
            ApplianceDB.GenerateMockDB();

            _home = new Home("21-26/14");

            CreateRooms(1);

            foreach (var room in _home.Rooms)
            {
                CreateSwitchBoards(room.Value, 1);

                foreach(var switchBoard in room.Value.SwitchBoards)
                {
                    SwitchBoardUI.Show(switchBoard.Value);
                }
            }
        }

        private static void CreateRooms(int count)
        {
            List<Room> rooms = new();

            while(--count >= 0)
            {
                //Display.Menu(ApplianceDB.GetAppliances());

                //List<int> applianceIds = new(Read.IntegerList(ApplianceDB.GetKeys()).Select(a => a).Distinct());
                
                List<int> applianceIds = new() { 1, 2, 3 };

                Room newRoom = new($"Room {count + 1}", applianceIds);

                Dictionary<int, int> applianceCounts = new();

                foreach (var applianceId in applianceIds)
                {
                    int choice = Read.Choice($"Number of {ApplianceDB.GetApplianceName(applianceId)}s: ");

                    applianceCounts.Add(applianceId, choice);
                }

                CreateAppliances(newRoom.AppliancesList, applianceCounts);

                rooms.Add(newRoom);
            }

            _home.AddRooms(rooms);
        }

        private static void CreateSwitchBoards(Room room, int count)
        {
            List<SwitchBoard> switchBoards = new();

            while (--count >= 0)
            {
                List<Switch> switches = new();

                //Display.Menu(room.AppliancesList.GetAllAppliances().ToDictionary(a => a.Key, a => a.Value.Name));

                //List<int> applianceKeys = new(Read.IntegerList(room.AppliancesList.GetApplianceKeys()).Select(a => a).Distinct());
                
                List<int> applianceKeys = new(room.AppliancesList.GetApplianceKeys());

                foreach(int key in applianceKeys)
                {
                    switches.Add(new Switch(room.AppliancesList.GetAppliance(key)));
                }

                SwitchBoard switchBoard = new();

                switchBoard.AddSwitches(switches);

                switchBoards.Add(switchBoard);
            }

            room.AddSwitchBoards(switchBoards);
        }

        private static void CreateAppliances(AppliancesList appliancesList, Dictionary<int, int> applianceCounts)
        {
            List<Appliance> appliances = new();

            foreach(var appliance in applianceCounts)
            {
                int count = appliance.Value;
                while (--count >= 0)
                {
                    appliances.Add(new Appliance(appliance.Key));
                }
            }

            appliancesList.AddAppliances(appliances);
        }
    }
}
