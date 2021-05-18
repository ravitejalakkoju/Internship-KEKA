using System;
using System.Collections.Generic;

namespace SwitchBoardConsole.Views
{
    class Display
    {
        public static void Show(string message)
        {
            Console.WriteLine(message);
        }

        public static void Menu(IDictionary<int, string> collection)
        {
            foreach (var key in collection.Keys)
            {
                Show($"{key}: {collection[key]}");
            }
        }
    }
}
