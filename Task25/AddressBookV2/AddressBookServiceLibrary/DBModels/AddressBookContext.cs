using Microsoft.EntityFrameworkCore;

namespace AddressBookV2.Services.DBModels
{
    public class AddressBookContext: DbContext
    {
        public AddressBookContext(DbContextOptions<AddressBookContext> options): base(options)
        {

        }

        public DbSet<DBEmployee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DBEmployee>().ToTable("Employee");
        }
    }
}
