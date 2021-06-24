using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AddressBook.Models;
using AddressBook.Data;

namespace AddressBook.ViewComponents
{
    public class EmployeesList: ViewComponent
    {
        private AddressBookContext _context;
        public EmployeesList(AddressBookContext context)
        {
            _context = context;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var model = _context.Employees.ToList().OrderBy(e => e.Name) ;
            return await Task.FromResult((IViewComponentResult)View("EmployeesList", model));
        }
    }
}
