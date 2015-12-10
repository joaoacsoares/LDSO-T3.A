using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using places4all.Models;

namespace places4all.Controllers
{
    public class ReportProblemsController : Controller
    {
        private ReportProblemDBContext db = new ReportProblemDBContext();

        // GET: ReportProblems
        public ActionResult Index()
        {
            return View(db.ReportProblems.ToList());
        }

        // GET: ReportProblems/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ReportProblem reportProblem = db.ReportProblems.Find(id);
            if (reportProblem == null)
            {
                return HttpNotFound();
            }
            return View(reportProblem);
        }

        // GET: ReportProblems/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ReportProblems/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ReportProblemId,ProblemDescription,ProblemPhoto")] ReportProblem reportProblem)
        {
            if (ModelState.IsValid)
            {
                db.ReportProblems.Add(reportProblem);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(reportProblem);
        }

        // GET: ReportProblems/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ReportProblem reportProblem = db.ReportProblems.Find(id);
            if (reportProblem == null)
            {
                return HttpNotFound();
            }
            return View(reportProblem);
        }

        // POST: ReportProblems/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ReportProblemId,ProblemDescription,ProblemPhoto")] ReportProblem reportProblem)
        {
            if (ModelState.IsValid)
            {
                db.Entry(reportProblem).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(reportProblem);
        }

        // GET: ReportProblems/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ReportProblem reportProblem = db.ReportProblems.Find(id);
            if (reportProblem == null)
            {
                return HttpNotFound();
            }
            return View(reportProblem);
        }

        // POST: ReportProblems/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ReportProblem reportProblem = db.ReportProblems.Find(id);
            db.ReportProblems.Remove(reportProblem);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
