using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class Rate
    {
        public int RateId { get; set; }
        public int UserId { get; set; }
        public int PlaceId { get; set; }
        public int Grade { get; set; }
    }
}