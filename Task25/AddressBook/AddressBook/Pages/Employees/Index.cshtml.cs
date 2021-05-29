using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using AddressBook.Data;
using AddressBook.Models;

namespace AddressBook.Pages.Employees
{
    public class IndexModel : PageModel
    {
        private readonly AddressBook.Data.AddressBookContext _context;

        public IndexModel(AddressBook.Data.AddressBookContext context)
        {
            _context = context;
        }

        public IList<Employee> Employees { get;set; }

        public async Task OnGetAsync()
        {
            Employees = await _context.Employees.ToListAsync();
        }
    }
}
