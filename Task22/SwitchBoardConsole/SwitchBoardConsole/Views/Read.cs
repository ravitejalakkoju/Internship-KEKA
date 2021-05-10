using System;
using System.Collections.Generic;

namespace SwitchBoardConsole.Views
{
    class Read
    {
        public static List<int> IntegerList(List<int> choices)
        {
            List<int> integerList = new();
            while (true)
            {
                try
                {
                    int input = Convert.ToInt32(Console.ReadLine());
                    if((choices != null && choices.Contains(input)) || choices == null)
                    {
                        integerList.Add(input);
                    }
                    else if (input == -1)
                    {
                        break;
                    }
                    else
                    {
                        throw new Exception("Re-Enter Choice, Selected Choice doesnot exist");
                    }
                } 
                catch(InvalidCastException)
                {
                    break;
                }
                catch (Exception e)
                {
                    Display.Show(e.Message);
                    continue;
                }
            }

            return integerList;
        }

        public static int Choice()
        {
            return Convert.ToInt32(Console.ReadLine());
        }

        public static int Choice(string message)
        {
            Display.Show(message);

            return Convert.ToInt32(Console.ReadLine());
        }
    }
}
