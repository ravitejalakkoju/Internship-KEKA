using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AddressBook.Models;
using AddressBook.Data;

namespace AddressBook.ViewComponents
{
    public class EmployeeDetails: ViewComponent
    {
        public EmployeeDetails()
        {
        }

        public async Task<IViewComponentResult> InvokeAsync(Employee employee)
        {
            var model = employee;
            return await Task.FromResult((IViewComponentResult) View("EmployeeDetails", model));
        }
    }
}
