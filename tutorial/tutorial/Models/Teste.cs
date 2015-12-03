using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace tutorial.Models
{
    public class Teste
    {
        public int Id { get; set; }
        public string texto { get; set; }
    }
    public class places4all : DbContext
    {
        public System.Data.Entity.DbSet<tutorial.Models.Teste> Testes { get; set; }

        public System.Data.Entity.DbSet<tutorial.Models.Place> Places { get; set; }
    }

}