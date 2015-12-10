using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class Place
    {
        public int PlaceId { get; set; }
        public string DesignacaoPT { get; set; }
        public string DesignacaoEN { get; set; }
        public string Endereco { get; set; }
        public string DescricaoPT { get; set; }
        public string DescricaoEN { get; set; }
        public string Contacto { get; set; }
        public string TipoEspaco { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public string Distrito { get; set; }
        public bool Auditado { get; set; }
        public string PlaceAdmin { get; set; }
    }
    public class PlaceDBContext : DbContext
    {
        public DbSet<Place> Places { get; set; }
    }
}