using System;

namespace OOPS_Samples
{
    // Abstraction
    abstract public class Car
    {
        public void Steer() { }
        public void wheels(int num = 4) { }

        public abstract string doorMovement();
    }
    public class HatchBack : Car {
        public override string doorMovement() {
            return "HatchBack";
        }
    }
    public class Sedan : Car
    {
        public override string doorMovement()
        {
            return "Normal";
        }
        public string configuration()
        {
            return "3-Box";                      
        }
    }

    // Encapsulation
    /* This refers to closing the data into a unit hiding the details of the object, we allow the user to see what they want them to see rather than how it works
     */

    public class encapsulation
    {
        private int data;
        public void setData(int input)
        {
            data = input;
        }
        public int getData()
        {
            return data;
        }
    }

    // Inheritance
    /* A class including properties of other class */

    public class ParentClass
    {
        public ParentClass()
        {
            Console.WriteLine("Parent Constructor");
        }
        public void print()
        {
            Console.WriteLine("Parent Class Function");
        }
    }
    public class ChildClass : ParentClass
    {
        public ChildClass()
        {
            Console.WriteLine("Child Constructor");
        }
    }

    // Polymorphism - one name many forms

    // 1. Static or Compile time - Overloading
    // Early Binding, have same name but different signature

    public class Overloading
    {
        public int add(int a, int b, int c)
        {
            return a + b + c;
        }
        public int add(int a, int b)
        {
            return a + b;
        }
    }

    // 2. Dynamic / Runtime Polymorphism - Overriding
    // Latebinding, have same method name and signature but different method

    public class Bank
    {
        public virtual double interestRate()
        {
            return 5;
        }
    }

    public class SBI : Bank
    {
        public double baseInterest { get; set; }
        public SBI()
        {
            baseInterest = 5.5;
        }
        public override double interestRate()
        {
            return baseInterest * 1.2;
        }
    }

    public class HDFC : Bank
    {
        public double baseInterest { get; set; }
        public HDFC()
        {
            baseInterest = 4.5;
        }
        public override double interestRate()
        {
            return baseInterest * 1.5;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            // Instance of Class - Object
            ChildClass child = new ChildClass();
            child.print();

            Overloading addition = new Overloading();
            int triAdd = addition.add(45, 34, 67);
            int add = addition.add(23, 34);

            HDFC hdfc = new HDFC();
            SBI sbi = new SBI();
            Console.WriteLine("SBI Rate of Interest: " + sbi.interestRate());
            Console.WriteLine("HDFC Rate of Interest: " + hdfc.interestRate());
        }
    }
}
