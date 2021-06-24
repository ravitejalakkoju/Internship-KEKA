using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AddressBookV2.ViewModels;

namespace AddressBookV2.ViewComponents
{
    public class EmployeeForm: ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(EmployeeViewModel employee)
        {
            var model = employee;

            return await Task.FromResult((IViewComponentResult)View(model));
        }
    }
}
