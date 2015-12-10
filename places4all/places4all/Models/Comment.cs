using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class Comment
    {
        public int CommentId { get; set; }
        public int UserId { get; set; }
        public int PlaceId { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; }
    }
}