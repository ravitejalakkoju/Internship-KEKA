using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using AddressBookV2.Data;
using AddressBookV2.Models;

namespace AddressBookV2.Pages.Employees
{
    public class IndexModel : PageModel
    {
        private readonly AddressBookV2.Data.AddressBookV2Context _context;

        public IndexModel(AddressBookV2.Data.AddressBookV2Context context)
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
