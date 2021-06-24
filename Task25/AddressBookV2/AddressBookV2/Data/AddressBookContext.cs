using AddressBookV2.Models;
using Microsoft.EntityFrameworkCore;

namespace AddressBookV2.Data
{
    public class AddressBookContext: DbContext
    {
        public AddressBookContext(DbContextOptions<AddressBookContext> options): base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().ToTable("Employee");
        }
    }
}
