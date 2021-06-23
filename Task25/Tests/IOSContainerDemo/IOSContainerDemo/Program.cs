using System;
using Unity;
using Unity.Injection;

namespace IOSContainerDemo
{
    public interface ICar
    {
        int Run();
    }

    public class BMW : ICar
    {
        private int _miles = 0;

        public int Run()
        {
            return ++_miles;
        }
    }

    public class Ford : ICar
    {
        private int _miles = 0;

        public int Run()
        {
            return ++_miles;
        }
    }

    public class Audi : ICar
    {
        private int _miles = 0;

        public int Run()
        {
            return ++_miles;
        }

    }
    public class Driver
    {
        private ICar _car = null;

        public Driver(ICar car)
        {
            _car = car;
        }

        public void RunCar()
        {
            Console.WriteLine("Running {0} - {1} mile ", _car.GetType().Name, _car.Run());
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            IUnityContainer container = new UnityContainer();

            ICar audi = new Audi();
            ICar bmw = new BMW();

            container.RegisterInstance<ICar>("Audi", audi);
            container.RegisterInstance<ICar>(bmw);

            container.RegisterType<Driver>("AudiCarDriver", new InjectionConstructor(container.Resolve<ICar>("Audi")));

            Driver driver = container.Resolve<Driver>();
            driver.RunCar();
            driver.RunCar();

            Driver driver2 = container.Resolve<Driver>("AudiCarDriver");
            driver2.RunCar();


        }
    }
}
