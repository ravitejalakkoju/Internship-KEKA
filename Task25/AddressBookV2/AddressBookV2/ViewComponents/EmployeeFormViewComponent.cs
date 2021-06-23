using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AddressBookV2.Models;

namespace AddressBookV2.ViewComponents
{
    public class EmployeeForm: ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(Employee employee)
        {
            var model = employee;

            return await Task.FromResult((IViewComponentResult)View(model));
        }
    }
}
