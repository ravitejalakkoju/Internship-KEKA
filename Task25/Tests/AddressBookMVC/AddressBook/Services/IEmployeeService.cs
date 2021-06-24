using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AddressBook.Models;

namespace AddressBook.Services
{
    public interface IEmployeeService
    {
        public List<Employee> GetEmployees();

        public Task<Employee> GetEmployee(int? id);

        public Task AddEmployee(Employee employee);

        public Task SetEmployee(Employee employee);

        public Task DeleteEmployee(Employee employee);

        public bool EmployeeExists(int id);

        public bool EmailExists(string email);

        public bool MobileNumberExists(string mobileNumber);
    }
}
