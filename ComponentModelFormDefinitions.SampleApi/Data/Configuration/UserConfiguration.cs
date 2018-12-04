using ComponentModelFormDefinitions.SampleApi.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ComponentModelFormDefinitions.SampleApi.Data.Configuration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(i => i.Id);
            builder.HasIndex(i => i.Email)
                .IsUnique();

            builder.Property(i => i.Email)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(i => i.GivenName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(i => i.Surname)
                .IsRequired()
                .HasMaxLength(50);
        }
    }
}
