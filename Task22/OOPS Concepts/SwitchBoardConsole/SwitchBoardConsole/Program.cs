using System;

namespace SwitchBoardConsole
{   
    public abstract class Device
    {
        public bool status = false;
        public abstract void changeStatus();
    }
    public class Fan: Device
    {
        public static int fanCount = 0;
        public Fan()
        {
            fanCount++;
        }
        public override void changeStatus()
        {
            status = !status;
        }
    }
    public class AC : Device
    {
        public static int acCount = 0;
        public AC()
        {
            acCount++;
        }
        public override void changeStatus()
        {
            status = !status;
        }
    }
    public class Bulb : Device
    {
        public static int bulbCount = 0;
        public Bulb()
        {
            bulbCount++;
        }
        public override void changeStatus()
        {
            status = !status;
        }
    }
    public class DeviceHandler
    {
        private int fans;
        private int acs;
        private int bulbs;
        private Fan[] fansList;
        private AC[] acsList;
        private Bulb[] bulbsList;
        public DeviceHandler(int fans, int acs, int bulbs)
        {
            this.fans = fans;
            this.acs = acs;
            this.bulbs = bulbs;
            this.fansList = new Fan[this.fans];
            this.acsList = new AC[this.acs];
            this.bulbsList = new Bulb[this.bulbs];
            this.createFans();
            this.createAcs();
            this.createBulbs();
            this.displayMenu();
        }
        private void createFans()
        {
            for(int i = 0; i < this.fans; i++)
            {
                fansList[i] = new Fan();
            }
        }
        private void createAcs()
        {
            for (int i = 0; i < this.acs; i++)
            {
                acsList[i] = new AC();
            }
        }
        private void createBulbs()
        {
            for (int i = 0; i < this.bulbs; i++)
            {
                bulbsList[i] = new Bulb();
            }
        }
        private void displayMenu()
        {
            int serialNumber = 1;
            for(int i = 0; i < this.fans; i++)
            {
                Console.WriteLine($"{serialNumber}: Fan {i + 1} is {(this.fansList[i].status ? "On" : "Off")}");
                serialNumber++;
            }
            for (int i = 0; i < this.acs; i++)
            {
                Console.WriteLine($"{serialNumber}: AC {i + 1} is {(this.acsList[i].status ? "On" : "Off")}");
                serialNumber++;
            }
            for (int i = 0; i < this.bulbs; i++)
            {
                Console.WriteLine($"{serialNumber}: Bulb {i + 1} is {(this.bulbsList[i].status ? "On" : "Off")}");
                serialNumber++;
            }
            int choice = Convert.ToInt32(Console.ReadLine());
            this.selectMenu(choice);
        }
        private int displaySelectedMenu(string device, int deviceNumber, bool status)
        {
            Console.WriteLine($"1: Switch {device} {deviceNumber+1} {(status ? "Off" : "On")}");
            Console.WriteLine("2. Back");
            int selection = Convert.ToInt32(Console.ReadLine());
            return selection;
        }
        private void selectMenu(int choice)
        {
            int selectedChoice;
            if(choice <= this.fans)
            {
                selectedChoice = choice - 1;
                int selection = this.displaySelectedMenu("Fan", selectedChoice, fansList[selectedChoice].status);
                if (selection == 1) fansList[selectedChoice].changeStatus();
            } 
            else if(choice > this.fans && choice <= this.fans + this.acs) {
                selectedChoice =  (choice - this.fans) - 1;
                int selection = this.displaySelectedMenu("AC", selectedChoice, fansList[selectedChoice].status);
                if (selection == 1) acsList[selectedChoice].changeStatus();
            }
            else
            {
                selectedChoice = (choice - (this.fans + this.acs) - 1);
                int selection = this.displaySelectedMenu("Bulb", selectedChoice, fansList[selectedChoice].status);
                if (selection == 1) bulbsList[selectedChoice].changeStatus();
            }
            this.displayMenu();
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("No. of Fans: ");
            int fans = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("No. of ACs: ");
            int acs = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("No. of Bulbs: ");
            int bulbs = Convert.ToInt32(Console.ReadLine());
            new DeviceHandler(fans, acs, bulbs);
        }
    }
}
