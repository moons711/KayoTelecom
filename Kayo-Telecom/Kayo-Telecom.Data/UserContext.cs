using Kayo_Telecom.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kayo_Telecom.Data
{
    public class UserContext : DbContext
    {
        public DbSet<Plan> Plans { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<User> Users { get; set; }

        public UserContext(DbContextOptions options) : base(options) { }

        /*
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-2A9J2RD;Initial Catalog=KayoDb;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False;")
                    .LogTo(Console.WriteLine, new[] { DbLoggerCategory.Database.Command.Name }, LogLevel.Information)
                    .EnableSensitiveDataLogging();
            }
        }
        */

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Uses what is called the fluent api
            //modelBuilder.Entity<Home>()
            //            .HasOne(h => h.Owner)
            //            .WithMany(o => o.Homes); this is how you define a one to many relationship
            modelBuilder.Entity<User>().HasMany(p => p.Subscriptions).WithOne(u => u.User).HasForeignKey(p => p.UserId);
            modelBuilder.Entity<Plan>().HasMany(p => p.Subscriptions).WithOne(u => u.Plan).HasForeignKey(p => p.PlanId);


            modelBuilder.Entity<Device>().HasOne(p => p.Subscription).WithMany(p =>p.Devices).HasForeignKey(p => p.SubscriptionId);

            //modelBuilder.Entity<Song>().ToTable("Music"); //if the table name did not match the class name
            //modelBuilder.Entity<ViewClass>().HasNoKey().ToView("ViewName"); //How to setup  a view
        }
    }
}
