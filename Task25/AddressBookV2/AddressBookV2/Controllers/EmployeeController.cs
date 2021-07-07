using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AddressBookV2.Services;
using AddressBookV2.Models.ViewModels;
using AddressBookV2.Models;
using AutoMapper;

namespace AddressBookV2.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly IEmployeeService _employeeService;

        private readonly IMapper _mapper;

        public EmployeeController(IEmployeeService employeeService, IMapper mapper)
        {
            _employeeService = employeeService;
            _mapper = mapper;
        }

        public IActionResult Index()
        {
            return View();
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
        public async Task<IActionResult> Create([Bind("Name,Email,MobileNumber,Landline,Website,Address")] EmployeeViewModel employeeViewModel)
        {
            if (ModelState.IsValid)
            {
                var employee = _mapper.Map<Employee>(employeeViewModel);

                await _employeeService.AddEmployee(employee);

                return RedirectToAction(nameof(Index));
            }

            return View(employeeViewModel);
        }

        public async Task<IActionResult> Details(int id)
        {
            var employee = await _employeeService.GetEmployee(id);

            if (employee == null)
            {
                return NotFound();
            }

            return View(_mapper.Map<EmployeeViewModel>(employee));
        }

        public async Task<IActionResult> Edit(int id)
        {
            var dbEmployee = await _employeeService.GetEmployee(id);

            var employee = _mapper.Map<Employee>(dbEmployee);

            if (employee == null)
            {
                return NotFound();
            }

            return View(_mapper.Map<EmployeeViewModel>(employee));
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
                    var employee = _mapper.Map<Employee>(employeeViewModel);

                    await _employeeService.UpdateEmployee(employee);
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
            var dbEmployee = await _employeeService.GetEmployee(id);

            var employee = _mapper.Map<Employee>(dbEmployee);

            if (dbEmployee == null)
            {
                return NotFound();
            }

            return View(_mapper.Map<EmployeeViewModel>(employee));
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ConfirmDelete(int id)
        {
            await _employeeService.DeleteEmployee(id);

            return RedirectToAction(nameof(Index));
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
