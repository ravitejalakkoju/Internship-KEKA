using System.ComponentModel.DataAnnotations;

namespace AddressBookV2.Models
{
    public class Employee
    {
        [Key]
        public int ID { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string MobileNumber { get; set; }

        public string Landline { get; set; }

        public string Website { get; set; }

        public string Address { get; set; }
    }
}
