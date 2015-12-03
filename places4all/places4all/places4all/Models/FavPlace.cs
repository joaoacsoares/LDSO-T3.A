using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class FavPlace
    {
        public int FavPlaceId { get; set; }
        public int UserId { get; set; }
        public int PlaceId { get; set; }
    }
}