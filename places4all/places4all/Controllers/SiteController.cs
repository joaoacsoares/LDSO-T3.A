using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace places4all.Controllers
{
    public class SiteController : Controller
    {
        // GET: Site
        public ActionResult Blog()
        {
            return View();
        }
        public ActionResult AboutUs()
        {
            return View();
        }
        public ActionResult Media()
        {
            return View();
        }
        public ActionResult Partners()
        {
            return View();
        }
        public ActionResult Contact()
        {
            return View();
        }
    }
}