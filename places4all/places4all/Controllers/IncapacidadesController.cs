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
    public class IncapacidadesController : Controller
    {
        private IncapacidadeDBContext db = new IncapacidadeDBContext();

        // GET: Incapacidades
        public ActionResult Index()
        {
            return View(db.Incapacidades.ToList());
        }

        // GET: Incapacidades/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Incapacidade incapacidade = db.Incapacidades.Find(id);
            if (incapacidade == null)
            {
                return HttpNotFound();
            }
            return View(incapacidade);
        }

        // GET: Incapacidades/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Incapacidades/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Designation")] Incapacidade incapacidade)
        {
            if (ModelState.IsValid)
            {
                db.Incapacidades.Add(incapacidade);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(incapacidade);
        }

        // GET: Incapacidades/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Incapacidade incapacidade = db.Incapacidades.Find(id);
            if (incapacidade == null)
            {
                return HttpNotFound();
            }
            return View(incapacidade);
        }

        // POST: Incapacidades/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Designation")] Incapacidade incapacidade)
        {
            if (ModelState.IsValid)
            {
                db.Entry(incapacidade).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(incapacidade);
        }

        // GET: Incapacidades/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Incapacidade incapacidade = db.Incapacidades.Find(id);
            if (incapacidade == null)
            {
                return HttpNotFound();
            }
            return View(incapacidade);
        }

        // POST: Incapacidades/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Incapacidade incapacidade = db.Incapacidades.Find(id);
            db.Incapacidades.Remove(incapacidade);
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
