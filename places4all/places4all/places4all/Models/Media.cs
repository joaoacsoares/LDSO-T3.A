using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class Media
    {
        public int MediaId { get; set; }
        public string MediaLink { get; set; }
        public DateTime MediaDate { get; set; }
    }
}