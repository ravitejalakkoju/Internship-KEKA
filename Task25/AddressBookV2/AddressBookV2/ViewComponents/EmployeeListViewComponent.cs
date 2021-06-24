using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AddressBookV2.Services;

namespace AddressBookV2.ViewComponents
{
    public class EmployeeList: ViewComponent
    {

        private readonly IEmployeeService _employeeService;

        public EmployeeList(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var model = _employeeService.GetEmployees().ToList().OrderBy(e => e.Name);
            ViewBag.Id = ViewContext.RouteData.Values["id"];
            return await Task.FromResult((IViewComponentResult)View(model));
        }
    }
}
