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
        public int AuditId { get; set; }
        public string Identifier { get; set; }
        public DateTime ChecklistDate { get; set; }
        public bool Active { get; set; }
    }
}