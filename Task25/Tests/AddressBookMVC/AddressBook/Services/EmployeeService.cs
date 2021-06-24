using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AddressBook.Data;
using AddressBook.Models;

namespace AddressBook.Services
{
    public class EmployeeService: IEmployeeService
    {
        public AddressBookContext _context;

        public EmployeeService(AddressBookContext context)
        {
            _context = context;
        }

        public List<Employee> GetEmployees()
        {
            var employees = _context.Employees.ToList();

            return employees;
        }

        public async Task<Employee> GetEmployee(int? id)
        {
            var employee = await _context.Employees.FindAsync(id);

            return employee;
        }

        public async Task AddEmployee(Employee employee)
        {
            _context.Add(employee);
            await _context.SaveChangesAsync();
        }
        public async Task SetEmployee(Employee employee)
        {
            _context.Update(employee);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteEmployee(Employee employee)
        {
            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
        }

        public bool EmployeeExists(int id)
        {
            return _context.Employees.Any(e => e.ID == id);
        }

        public bool EmailExists(string email)
        {
            return _context.Employees.Any(e => e.Email == email);
        }

        public bool MobileNumberExists(string mobileNumber)
        {
            return _context.Employees.Any(e => e.MobileNumber == mobileNumber); ;
        }
    }
}
