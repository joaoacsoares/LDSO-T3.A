using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class Checklist
    {
        public int ChecklistId { get; set; }
        public string Identifier { get; set; }
        public DateTime Date { get; set; }
        public bool Active { get; set; }
    }
    public class ChecklistDBContext : DbContext
    {
        public DbSet<Checklist> Checklists { get; set; }
    }
}