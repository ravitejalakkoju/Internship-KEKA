using AutoMapper;
using AddressBookV2.Models;
using AddressBookV2.Services.DBModels;
using AddressBookV2.Models.ViewModels;

namespace AddressBookV2.Services.AutoMapperProfiles
{
    public class EmployeeProfile: Profile
    {
        public EmployeeProfile()
        {
            //CreateMap<Employee, DBEmployee>();
            //CreateMap<DBEmployee, Employee>();
            //CreateMap<DBEmployee, EmployeeViewModel>();
            //CreateMap<EmployeeViewModel, DBEmployee>();
            CreateMap<Employee, EmployeeViewModel>();
            CreateMap<EmployeeViewModel, Employee>();
        }
    }
}
