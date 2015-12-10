using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Email { get; set; }
        public string PassHash { get; set; }
        public string Name { get; set; }
        public bool Newsletter { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime StateDate { get; set; }
        public DateTime LastAccessDate { get; set; }
        public string UserState { get; set; }
        public string AuthProvider { get; set; }
        public int ExternalId { get; set; }
        public string UserImage { get; set; }
        public bool IsVisible { get; set; }
        public bool Auditor { get; set; }
    }
}