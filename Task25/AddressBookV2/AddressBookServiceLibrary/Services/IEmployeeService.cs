using System.Collections.Generic;
using System.Threading.Tasks;
using AddressBookV2.Models;
using AddressBookV2.Services.DBModels;

namespace AddressBookV2.Services
{
    public interface IEmployeeService
    {
        public List<Employee> GetEmployees();

        public Task<Employee> GetEmployee(int id);

        public Task AddEmployee(Employee employee);

        public Task UpdateEmployee(Employee employee);

        public Task DeleteEmployee(int id);

        public bool EmployeeExists(int id);

        public bool IsEmailExists(string email, int? id);

        public bool IsMobileNumberExists(string mobileNumber, int? id);
    }
}
