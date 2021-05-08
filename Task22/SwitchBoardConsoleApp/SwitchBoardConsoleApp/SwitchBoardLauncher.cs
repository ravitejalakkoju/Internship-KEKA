namespace SwitchBoardConsoleApp
{
    class SwitchBoardLauncher
    {
        public static void Main(string[] args)
        {
            ApplianceDB.GenerateMockDB();

            new SwitchBoardUI();
        }
    }
}
