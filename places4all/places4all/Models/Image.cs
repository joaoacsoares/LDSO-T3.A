using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class Image
    {
        public int ImageId { get; set; }
        public string Name { get; set; }
    }
    public class ImageDBContext : DbContext
    {
        public DbSet<Image> Images { get; set; }
    }
}