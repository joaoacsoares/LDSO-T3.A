using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public int ChecklistId { get; set; }
        public string QuestionText { get; set; }
        public int Answer { get; set; }
        public string Suggestion { get; set; }
        public decimal QuestionWeight { get; set; }
        public decimal QuestionType { get; set; }
        public bool Active { get; set; }
    }
}