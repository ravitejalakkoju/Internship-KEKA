using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace AddressBookV2.Models
{
    public class Employee
    {
        public int ID { get; set; }

        [Required, StringLength(50, MinimumLength = 1)]
        public string Name { get; set; }

        [Required, EmailAddress]
        [Remote("CheckExistingEmail", "Employee", ErrorMessage = "E-Mail already Exists")]
        public string Email { get; set; }

        [Required, StringLength(10)]
        public string MobileNumber { get; set; }

        public string Landline { get; set; }

        [Url]
        public string Website { get; set; }

        [Required, StringLength(100)]
        public string Address { get; set; }
    }
}
