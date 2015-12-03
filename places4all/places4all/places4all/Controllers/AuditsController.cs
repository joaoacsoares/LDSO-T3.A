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
    public class AuditsController : Controller
    {
        private places4allDB db = new places4allDB();

        // GET: Audits
        public ActionResult Index()
        {
            return View(db.Audits.ToList());
        }

        // GET: Audits/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Audit audit = db.Audits.Find(id);
            if (audit == null)
            {
                return HttpNotFound();
            }
            return View(audit);
        }

        // GET: Audits/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Audits/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "AuditId,PlaceId,UserId,AuditDate,AuditWCJustPT,AuditWCJustEN,AuditParkJustPT,AuditParkJustEN,AuditGASJustPT,AuditGASJustEN,AuditIntJustPT,AuditIntJustEN,AuditOutJustPT,AuditOutJustEN,AuditHallJustPT,AuditHallJustEN,AuditIntRoute,AuditOutRoute,AuditHallway,AuditWC,AuditCarPark,AuditGoodsServ,AuditTotal")] Audit audit)
        {
            if (ModelState.IsValid)
            {
                db.Audits.Add(audit);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(audit);
        }

        // GET: Audits/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Audit audit = db.Audits.Find(id);
            if (audit == null)
            {
                return HttpNotFound();
            }
            return View(audit);
        }

        // POST: Audits/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "AuditId,PlaceId,UserId,AuditDate,AuditWCJustPT,AuditWCJustEN,AuditParkJustPT,AuditParkJustEN,AuditGASJustPT,AuditGASJustEN,AuditIntJustPT,AuditIntJustEN,AuditOutJustPT,AuditOutJustEN,AuditHallJustPT,AuditHallJustEN,AuditIntRoute,AuditOutRoute,AuditHallway,AuditWC,AuditCarPark,AuditGoodsServ,AuditTotal")] Audit audit)
        {
            if (ModelState.IsValid)
            {
                db.Entry(audit).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(audit);
        }

        // GET: Audits/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Audit audit = db.Audits.Find(id);
            if (audit == null)
            {
                return HttpNotFound();
            }
            return View(audit);
        }

        // POST: Audits/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Audit audit = db.Audits.Find(id);
            db.Audits.Remove(audit);
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
