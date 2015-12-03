using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class places4allDB : DbContext
    {
        public DbSet<User> Users { get; set; } 
        public DbSet<ReportProblem> ReportProblems { get; set; }
        public DbSet<Rate> Rates { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Place> Places { get; set; }
        public DbSet<Media> Medias { get; set; }
        public DbSet<Incapacidade> Incapacidades { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<FavPlace> FavPlaces { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Checklist> Checklists { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Audit> Audits { get; set; }
    }
}