using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using AddressBookV2.Data;
using AddressBookV2.Models;

namespace AddressBookV2.Pages.Employees
{
    public class CreateModel : PageModel
    {
        private readonly AddressBookV2.Data.AddressBookV2Context _context;

        public CreateModel(AddressBookV2.Data.AddressBookV2Context context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Employee Employee { get; set; }

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            if(!_context.Employees.Any(x => x.Email == Employee.Email) && !_context.Employees.Any(x => x.MobileNumber == Employee.MobileNumber))
            {
                _context.Employees.Add(Employee);
                await _context.SaveChangesAsync();
                return RedirectToPage("./Index");
            }
            else
            {
                return Page();
            }

        }
    }
}
