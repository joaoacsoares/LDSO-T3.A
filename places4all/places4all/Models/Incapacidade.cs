using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class Incapacidade
    {
        public int Id { get; set; }
        public string Designation { get; set; }
    }
    public class IncapacidadeDBContext : DbContext
    {
        public DbSet<Incapacidade> Incapacidades { get; set; }
    }
}