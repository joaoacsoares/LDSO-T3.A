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
    public class FavPlacesController : Controller
    {
        private FavPlaceDBContext db = new FavPlaceDBContext();

        // GET: FavPlaces
        public ActionResult Index()
        {
            return View(db.FavPlaces.ToList());
        }

        // GET: FavPlaces/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            FavPlace favPlace = db.FavPlaces.Find(id);
            if (favPlace == null)
            {
                return HttpNotFound();
            }
            return View(favPlace);
        }

        // GET: FavPlaces/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: FavPlaces/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "FavPlaceId")] FavPlace favPlace)
        {
            if (ModelState.IsValid)
            {
                db.FavPlaces.Add(favPlace);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(favPlace);
        }

        // GET: FavPlaces/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            FavPlace favPlace = db.FavPlaces.Find(id);
            if (favPlace == null)
            {
                return HttpNotFound();
            }
            return View(favPlace);
        }

        // POST: FavPlaces/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "FavPlaceId")] FavPlace favPlace)
        {
            if (ModelState.IsValid)
            {
                db.Entry(favPlace).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(favPlace);
        }

        // GET: FavPlaces/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            FavPlace favPlace = db.FavPlaces.Find(id);
            if (favPlace == null)
            {
                return HttpNotFound();
            }
            return View(favPlace);
        }

        // POST: FavPlaces/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            FavPlace favPlace = db.FavPlaces.Find(id);
            db.FavPlaces.Remove(favPlace);
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
