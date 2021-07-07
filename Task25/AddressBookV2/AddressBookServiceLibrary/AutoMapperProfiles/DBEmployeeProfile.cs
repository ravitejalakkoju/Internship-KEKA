using AutoMapper;
using AddressBookV2.Models;
using AddressBookV2.Services.DBModels;
using AddressBookV2.Models.ViewModels;

namespace AddressBookV2.Services.AutoMapperProfiles
{
    public class DBEmployeeProfile: Profile
    {
        public DBEmployeeProfile()
        {
            CreateMap<DBEmployee, Employee>();
            CreateMap<Employee, DBEmployee>();
        }
    }
}
