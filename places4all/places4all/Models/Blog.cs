﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace places4all.Models
{
    public class Blog
    {
        public int BlogId { get; set; }
        public string BlogText { get; set; }
        public string BlogImage { get; set; }
    }
}