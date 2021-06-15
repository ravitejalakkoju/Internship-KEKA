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
    public class DetailsModel : PageModel
    {
        private readonly AddressBookV2.Data.AddressBookV2Context _context;

        public DetailsModel(AddressBookV2.Data.AddressBookV2Context context)
        {
            _context = context;
        }

        public Employee Employee { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Employee = await _context.Employees.FirstOrDefaultAsync(m => m.ID == id);

            if (Employee == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
