using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AddressBookV2.Services.DBModels;
using AddressBookV2.Models;
using AutoMapper;

namespace AddressBookV2.Services
{
    public class EmployeeService: IEmployeeService
    {
        private readonly AddressBookContext _context;

        private readonly IMapper _mapper;

        public EmployeeService(AddressBookContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public List<Employee> GetEmployees()
        {
            var dbEmployees = _context.Employees.ToList();

            return _mapper.Map<List<Employee>>(dbEmployees);
        }

        public async Task<Employee> GetEmployee(int id)
        {
            var dbEmployee = await _context.Employees.FindAsync(id);

            return _mapper.Map<Employee>(dbEmployee);
        }

        public async Task AddEmployee(Employee employee)
        {
            var dbEmployee = _mapper.Map<DBEmployee>(employee);

            _context.Add(dbEmployee);

            await _context.SaveChangesAsync();
        }

        public async Task UpdateEmployee(Employee employee) 
        {
            var dbEmployee = _mapper.Map<DBEmployee>(employee);

            _context.Update(dbEmployee);

            await _context.SaveChangesAsync();
        }

        public async Task DeleteEmployee(int id)
        {
            var dbEmployee = await _context.Employees.FindAsync(id);

            _context.Employees.Remove(dbEmployee);

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
