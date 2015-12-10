using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class ReportProblem
    {
        public int ReportProblemId { get; set; }
        public int UserId { get; set; }
        public int PlaceId { get; set; }
        public string ProblemDescription { get; set; }
        public string ProblemPhoto { get; set; }
    }
}