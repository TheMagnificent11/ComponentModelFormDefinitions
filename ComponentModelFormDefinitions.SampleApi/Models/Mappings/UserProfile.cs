using AutoMapper;

namespace ComponentModelFormDefinitions.SampleApi.Models.Mappings
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<Domain.User, User>();
        }
    }
}
