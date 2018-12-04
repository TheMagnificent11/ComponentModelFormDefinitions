using ComponentModelFormDefinitions.SampleApi.Data.Configuration;
using ComponentModelFormDefinitions.SampleApi.Domain;
using Microsoft.EntityFrameworkCore;

namespace ComponentModelFormDefinitions.SampleApi.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public int AttachedRepositories { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<T> EntitySet<T>()
            where T : class
        {
            return Set<T>();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration<User>(new UserConfiguration());
        }
    }
}
