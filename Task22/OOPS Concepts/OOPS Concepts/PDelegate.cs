using System;
using System.Collections.Generic;

namespace OOPS_Concepts
{
    class PDelegate
    {
        public delegate void SingleVariableArea<T>(T x);
        public delegate void DoubleVariableArea<T>(T x, T y);
        public PDelegate()
        {
            SingleVariableArea<int> singleIntegerVariableArea= Square;
            SingleVariableArea<double> singleDoubleVariableArea = Circle;
            DoubleVariableArea<int> doubleIntegerVariableArea = Rectangle;
            DoubleVariableArea<double> doubleDVariableArea = Cylinder;
            doubleDVariableArea += Cone;

            singleIntegerVariableArea(5);
            doubleIntegerVariableArea(5, 10);
            singleDoubleVariableArea(5.1);
            doubleDVariableArea(5.1, 10.1);
        }
        static void Square(int side) { Console.WriteLine($"Square: {(side * side)}"); }

        static void Circle(double radius) { Console.WriteLine($"Circle: {(3.14 * radius * radius)}"); }

        static void Rectangle(int length, int breadth) { Console.WriteLine($"Rectangle: {(length * breadth)}"); }

        static void Cylinder(double radius, double height) { Console.WriteLine($"Cylinder: {(2 * 3.14 * radius * height)}"); }

        static void Cone(double radius, double height) { Console.WriteLine($"Cone: {(((double) 1 / 3) * (2 * 3.14 * radius * height))}"); }
    }
}
