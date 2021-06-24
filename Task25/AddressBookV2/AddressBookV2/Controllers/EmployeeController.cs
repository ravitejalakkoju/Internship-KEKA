using AddressBookV2.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AddressBookV2.Services;
using AddressBookV2.ViewModels;

namespace AddressBookV2.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        public IActionResult Index()
        {
            return View(_employeeService.GetEmployees());
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpGet]
        public ActionResult CheckExistingEmail(string Email, int? ID)
        {
            var isEmailExists = !_employeeService.IsEmailExists(Email, ID);
            return Json(isEmailExists);
        }

        [HttpGet]
        public ActionResult CheckExistingMobileNumber(string MobileNumber, int? ID)
        {
            var isMobileNumberExists = !_employeeService.IsMobileNumberExists(MobileNumber, ID);
            return Json(isMobileNumberExists);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Name,Email,MobileNumber,Landline,Website,Address")] Employee employee)
        {
            if (ModelState.IsValid)
            {
                await _employeeService.AddEmployee(employee);

                return RedirectToAction(nameof(Index));
            }

            return View(EmployeeViewModelConverter(employee));
        }

        public async Task<IActionResult> Details(int id)
        {
            var employee = await _employeeService.GetEmployee(id);

            if (employee == null)
            {
                return NotFound();
            }

            return View(employee);
        }

        public async Task<IActionResult> Edit(int id)
        {
            var employee = await _employeeService.GetEmployee(id);

            if (employee == null)
            {
                return NotFound();
            }

            return View(EmployeeViewModelConverter(employee));
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,Name,Email,MobileNumber,Landline,Website,Address")] EmployeeViewModel employeeViewModel)
        {
            if (id != employeeViewModel.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    var employee = await _employeeService.GetEmployee(id);

                    await _employeeService.UpdateEmployee(EmployeeCopy(employee, employeeViewModel));
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_employeeService.EmployeeExists(employeeViewModel.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(employeeViewModel);
        }

        public async Task<IActionResult> Delete(int id)
        {
            var employee = await _employeeService.GetEmployee(id);

            if (employee == null)
            {
                return NotFound();
            }

            return View(EmployeeViewModelConverter(employee));
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ConfirmDelete(int id)
        {
            var employee = await _employeeService.GetEmployee(id);

            await _employeeService.DeleteEmployee(employee);

            return RedirectToAction(nameof(Index));
        }

        [NonAction]
        public Employee EmployeeConverter(EmployeeViewModel employeeViewModel)
        {
            return new Employee
            {
                Name = employeeViewModel.Name,
                Email = employeeViewModel.Email,
                MobileNumber = employeeViewModel.MobileNumber,
                Landline = employeeViewModel.Landline,
                Website = employeeViewModel.Website,
                Address = employeeViewModel.Address
            };
        }

        [NonAction]
        public EmployeeViewModel EmployeeViewModelConverter(Employee employee)
        {
            return new EmployeeViewModel
            {
                ID = employee.ID,
                Name = employee.Name,
                Email = employee.Email,
                MobileNumber = employee.MobileNumber,
                Landline = employee.Landline,
                Website = employee.Website,
                Address = employee.Address
            };
        }

        [NonAction]
        public Employee EmployeeCopy(Employee employee, EmployeeViewModel employeeViewModel)
        {
            employee.Name = employeeViewModel.Name;
            employee.Email = employeeViewModel.Email;
            employee.MobileNumber = employeeViewModel.MobileNumber;
            employee.Landline = employeeViewModel.Landline;
            employee.Website = employeeViewModel.Website;
            employee.Address = employeeViewModel.Address;     

            return employee;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
