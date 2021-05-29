using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AddressBookV2.Models;

namespace AddressBookV2.Data
{
    public class AddressBookV2Context : DbContext
    {
        public AddressBookV2Context (DbContextOptions<AddressBookV2Context> options)
            : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().ToTable("Employee");
        }
    }
}
