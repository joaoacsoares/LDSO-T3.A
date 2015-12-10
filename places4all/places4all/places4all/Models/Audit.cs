using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class Audit
    {
        public int AuditId { get; set; }
        public int PlaceId { get; set; }
        public int UserId { get; set; }
        public DateTime AuditDate { get; set; }
        public string AuditWCJustPT { get; set; }
        public string AuditWCJustEN { get; set; }
        public string AuditParkJustPT { get; set; }
        public string AuditParkJustEN { get; set; }
        public string AuditGASJustPT { get; set; }
        public string AuditGASJustEN { get; set; }
        public string AuditIntJustPT { get; set; }
        public string AuditIntJustEN { get; set; }
        public string AuditOutJustPT { get; set; }
        public string AuditOutJustEN { get; set; }
        public string AuditHallJustPT { get; set; }
        public string AuditHallJustEN { get; set; }
        public decimal AuditIntRoute { get; set; }
        public decimal AuditOutRoute { get; set; }
        public decimal AuditHallway { get; set; }
        public decimal AuditWC { get; set; }
        public decimal AuditCarPark { get; set; }
        public decimal AuditGoodsServ { get; set; }
        public decimal AuditTotal { get; set; }
    }
}