using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace AddressBookV2.Models.ViewModels
{
    public class EmployeeViewModel
    {
        [Key]
        public int ID { get; set; }

        [Required(ErrorMessage = "Name is Required*"), StringLength(50, MinimumLength = 1, ErrorMessage = "Name length exceeds limit")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Email is Required*"), EmailAddress(ErrorMessage = "Invalid E-Mail Pattern")]
        [Remote("CheckExistingEmail", "Employee", AdditionalFields = "ID", ErrorMessage = "E-Mail already Exists")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Mobile Number is Required*"), Phone(ErrorMessage = "Invalid Mobile Number"), StringLength(10, MinimumLength = 10, ErrorMessage = "Invalid Number Length")]
        [Remote("CheckExistingMobileNumber", "Employee", AdditionalFields = "ID", ErrorMessage = "Mobile Number already Exists")]
        public string MobileNumber { get; set; }

        public string Landline { get; set; }

        [Url(ErrorMessage = "Invalid URL Pattern")]
        public string Website { get; set; }

        [Required(ErrorMessage = "Address is Required*"), StringLength(100)]
        public string Address { get; set; }
    }
}
