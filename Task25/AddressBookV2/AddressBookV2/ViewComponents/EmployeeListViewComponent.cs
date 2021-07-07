using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AddressBookV2.Services;
using AutoMapper;
using System.Collections.Generic;
using AddressBookV2.Models;

namespace AddressBookV2.ViewComponents
{
    public class EmployeeList: ViewComponent
    {

        private readonly IEmployeeService _employeeService;
        private readonly IMapper _mapper;

        public EmployeeList(IEmployeeService employeeService, IMapper mapper)
        {
            _employeeService = employeeService;
            _mapper = mapper;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            //var employees = _mapper.Map<List<Employee>>(_employeeService.GetEmployees());
            var employees = _employeeService.GetEmployees();
            ViewBag.Id = ViewContext.RouteData.Values["id"];
            return await Task.FromResult((IViewComponentResult)View(employees.OrderBy(e => e.Name)));
        }
    }
}
