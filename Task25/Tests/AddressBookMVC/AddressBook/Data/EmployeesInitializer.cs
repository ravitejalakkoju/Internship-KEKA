using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AddressBook.Models;
using System.Data.Entity;

namespace AddressBook.Data
{
    public class EmployeesInitializer
    {
        public static void Initialize(AddressBookContext context)
        {
            if (context.Employees.Any())
            {
                return;   // DB has been seeded
            }

            var Employees = new Employee[]
            {
            new Employee { ID = 0, Name = "Chandermani Arora", Email = "chandermani@technovert.com", MobileNumber = "9292929222", Landline = "040301231211", Website = "http://www.technovert.com", Address = "123 now here, Some street, Madhapur, Hyderabad 500033" },
            new Employee { ID = 1, Name = "Praveen Battula", Email = "praveen@technovert.com", MobileNumber = "9292929222", Landline = "040301231211", Website = "http://www.technovert.com", Address = "123 now here, Some street, Madhapur, Hyderabad 500033" },
            new Employee { ID = 2, Name = "Praveen Battula", Email = "praveen@technovert.com", MobileNumber = "9292929222", Landline = "040301231211", Website = "http://www.technovert.com", Address = "123 now here, Some street, Madhapur, Hyderabad 500033" },
            new Employee { ID = 3, Name = "Praveen Battula", Email = "praveen@technovert.com", MobileNumber = "9292929222", Landline = "040301231211", Website = "http://www.technovert.com", Address = "123 now here, Some street, Madhapur, Hyderabad 500033" },
            new Employee { ID = 4, Name = "Praveen Battula", Email = "praveen@technovert.com", MobileNumber = "9292929222", Landline = "040301231211", Website = "http://www.technovert.com", Address = "123 now here, Some street, Madhapur, Hyderabad 500033" }
            };

            foreach (Employee e in Employees)
            {
                context.Employees.Add(e);
            }

            context.SaveChanges();
        }
    }
}
