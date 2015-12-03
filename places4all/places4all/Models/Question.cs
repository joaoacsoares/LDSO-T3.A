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
        public string QuestionText { get; set; }
        public int Answer { get; set; }
        public string Suggestion { get; set; }
        public decimal Weight { get; set; }
        public decimal Type { get; set; }
        public bool Active { get; set; }
    }
    public class QuestionDBContext : DbContext
    {
        public DbSet<Question> Questions { get; set; }
    }
}