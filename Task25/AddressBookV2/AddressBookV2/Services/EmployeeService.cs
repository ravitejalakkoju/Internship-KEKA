using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AddressBookV2.Data;
using AddressBookV2.Models;

namespace AddressBookV2.Services
{
    public class EmployeeService: IEmployeeService
    {
        private readonly AddressBookContext _context;

        public EmployeeService(AddressBookContext context)
        {
            _context = context;
        }

        public List<Employee> GetEmployees()
        {
            return _context.Employees.ToList();
        }

        public async Task<Employee> GetEmployee(int id)
        {
            return await _context.Employees.FindAsync(id);
        }

        public async Task AddEmployee(Employee employee)
        {
            _context.Add(employee);

            await _context.SaveChangesAsync();
        }

        public async Task UpdateEmployee(Employee employee) 
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

        public bool IsEmailExists(string email, int? id)
        {
            return _context.Employees.Any(e => e.Email == email && e.ID != id);
        }

        public bool IsMobileNumberExists(string mobileNumber, int? id)
        {
            return _context.Employees.Any(e => e.MobileNumber == mobileNumber && e.ID != id); ;
        }
    }
}
