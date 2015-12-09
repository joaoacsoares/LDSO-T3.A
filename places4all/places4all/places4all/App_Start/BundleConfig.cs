using System.Web;
using System.Web.Optimization;

namespace places4all
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            /* HOMEPAGE BUNDLES */
            bundles.Add(new StyleBundle("~/Content/Homepage/css").Include(
                "~/Content/Homepage/places4all.css"));

            bundles.Add(new ScriptBundle("~/Scritps/Homepage_header/js").Include(
                "~/Scripts/Homepage/analytics.js"));

            bundles.Add(new ScriptBundle("~/Scritps/Homepage_footer/js").Include(
                "~/Scripts/Homepage/jquery-2.1.3.js",
                "~/Scripts/Homepage/jquery.backstretch.js",
                "~/Scripts/Homepage/bootstrap.js",
                "~/Scripts/Homepage/jasny-bootstrap.js",
                "~/Scripts/Homepage/pfa.js",
                "~/Scripts/Homepage/jquery.dotdotdot.js",
                "~/Scripts/Homepage/jquery.cookie.js",
                "~/Scripts/Homepage/MyScript.js"));


            /* LOGIN BUNDLES */
            bundles.Add(new StyleBundle("~/Content/Login/css").Include(
                "~/Content/Login/jquey.datetimepicker.css",
                "~/Content/Login/Login.css",
                "~/Content/Login/places4ll.css"));

            bundles.Add(new StyleBundle("~/Scripts/Login/js").Include(
               "~/Scripts/Login/3QFZqSHayzH.js",
               "~/Scripts/Login/all.js",
               "~/Scripts/Login/analytics.js",
               "~/Scripts/Login/animatescrolljs",
               "~/Scripts/Login/bootstrap(1).js",
               "~/Scripts/Login/bootstrap.js",
               "~/Scripts/Login/canvas-to-blob.js",
               "~/Scripts/Login/jasny-bootstrap.js",
               "~/Scripts/Login/jquery-2.1.3.js",
               "~/Scripts/Login/jquery.blueimp-gallery.js",
               "~/Scripts/Login/jquery.cookie.js",
               "~/Scripts/Login/jquery.datetimepicker.js",
               "~/Scripts/Login/jquery.dotdotdot.js",
               "~/Scripts/Login/jquery.fileupload-audio.js",
               "~/Scripts/Login/jquery.fileupload-image.js",
               "~/Scripts/Login/jquery.fileupload-process.js",
               "~/Scripts/Login/jquery.fileupload-ui.js",
               "~/Scripts/Login/jquery.fileupload-validate.js",
               "~/Scripts/Login/jquery.fileupload-video.js",
               "~/Scripts/Login/jquery.fileupload.js",
               "~/Scripts/Login/jquery.iframe-transport.js",
               "~/Scripts/Login/jquery.js",
               "~/Scripts/Login/jquery.ui.widget.js",
               "~/Scripts/Login/load-image.all.js",
               "~/Scripts/Login/main.js",
               "~/Scripts/Login/pfa.js",
               "~/Scripts/Login/sdk.js",
               "~/Scripts/Login/tmpl.js"));

            /* PLACESPAGE BUNDLES */
            bundles.Add(new StyleBundle("~/Content/PlacesPage/css").Include(
                "~/Content/PlacesPage/jquery.datetimepicker.css",
                "~/Content/PlacesPage/place.css",
                "~/Content/PlacesPage/places4all.css"));

            bundles.Add(new ScriptBundle("~/Script/PlacesPage/js").Include(
                "~/Scripts/PlacesPage/all.js",
                "~/Scripts/PlacesPage/analytics.js",
                "~/Scripts/PlacesPage/bootstrap.js",
                "~/Scripts/PlacesPage/bootstrap(1).js",
                "~/Scripts/PlacesPage/canvas-to-blob.js",
                "~/Scripts/PlacesPage/common.js",
                "~/Scripts/PlacesPage/jasny.bootstrap.js",
                "~/Scripts/PlacesPage/jquery-2.1.3.js",
                "~/Scripts/PlacesPage/jquery.backstretch.js",
                "~/Scripts/PlacesPage/jquery.blueimp-gallery.js",
                "~/Scripts/PlacesPage/jquery.confirm.js",
                "~/Scripts/PlacesPage/jquery.cookie.js", 
                "~/Scripts/PlacesPage/jquery.datetimepicker.js",
                "~/Scripts/PlacesPage/jquery.dotdotdot.js",
                "~/Scripts/PlacesPage/jquery.fileupload-audio.js",
                "~/Scripts/PlacesPage/jquery.fileupload-image.js",
                "~/Scripts/PlacesPage/jquery.fileupload-ui.js",
                "~/Scripts/PlacesPage/jquery.fileupload-validate.js",
                "~/Scripts/PlacesPage/jquery.fileupload-video.js",
                "~/Scripts/PlacesPage/jquery.fileupload.js",
                "~/Scripts/PlacesPage/jquery.iframe-transport.js",
                "~/Scripts/PlacesPage/jquery.js",
                "~/Scripts/PlacesPage/jquery.NewWindow.js",
                "~/Scripts/PlacesPage/jquery.ui.widget.js",
                "~/Scripts/PlacesPage/load-image.all.js",
                "~/Scripts/PlacesPage/main.js",
                "~/Scripts/PlacesPage/map.js",
                "~/Scripts/PlacesPage/marker.js",
                "~/Scripts/PlacesPage/modernizr.js",
                "~/Scripts/PlacesPage/onion.js",
                "~/Scripts/PlacesPage/pfa.js",
                "~/Scripts/PlacesPage/some.google.script.js",
                "~/Scripts/PlacesPage/stats.js",
                "~/Scripts/PlacesPage/tmpl.js",
                "~/Scripts/PlacesPage/utils.js"));


            /* LISTPALCES BUNDLES */
            bundles.Add(new StyleBundle("~/Content/ListPlaces/css").Include(
                "~/Content/ListPlaces/jquery.datetimepicker.css",
                "~/Content/ListPlaces/places4all.css"));

            bundles.Add(new ScriptBundle("~/Script/ListPlaces/js").Include(
                "~/Scripts/ListPlaces/analytics.js",
                 "~/Scripts/ListPlaces/jquery-2.1.3.js",
                 "~/Scripts/ListPlaces/jquery.js",
                 "~/Scripts/ListPlaces/jquery.datetimepicker.js",
                 "~/Scripts/ListPlaces/jquery.backstretch.js",
                 "~/Scripts/ListPlaces/bootstrap.js",
                 "~/Scripts/ListPlaces/jasny.bootstrap.js",
                 "~/Scripts/ListPlaces/animatescrolljs",
                 "~/Scripts/ListPlaces/jquery.dotdotdot.js",
                 "~/Scripts/ListPlaces/jquery.ui.widget.js",
                 "~/Scripts/ListPlaces/tmpl.js",
                 "~/Scripts/ListPlaces/load-image.all.js",
                 "~/Scripts/ListPlaces/canvas-to-blob.js",
                 "~/Scripts/ListPlaces/bootstrap(1).js",
                 "~/Scripts/ListPlaces/jquery.blueimp-gallery.js",
                 "~/Scripts/ListPlaces/jquery.iframe-transport.js",
                 "~/Scripts/ListPlaces/jquery.fileupload.js",
                 "~/Scripts/ListPlaces/jquery.fileupload-process.js",
                 "~/Scripts/ListPlaces/jquery.fileupload-image.js",
                 "~/Scripts/ListPlaces/jquery.fileupload-audio.js",
                 "~/Scripts/ListPlaces/jquery.fileupload-video.js",
                 "~/Scripts/ListPlaces/jquery.fileupload-validate.js",
                 "~/Scripts/ListPlaces/jquery.fileupload-ui.js",
                 "~/Scripts/ListPlaces/jquery.cookie.js",
                 "~/Scripts/ListPlaces/all.js",
                 "~/Scripts/ListPlaces/pfa.js",
                 "~/Scripts/ListPlaces/main.js"));



            /* ABOUTUS BUNDLES */
            bundles.Add(new StyleBundle("~/Content/AboutUs/css").Include(
                "~/Content/AboutUs/jquery.datetimepicker.css",
                "~/Content/AboutUs/places4all.css"));

            bundles.Add(new ScriptBundle("~/Script/AboutUs/js").Include(
                "~/Scripts/AboutUs/analytics.js",
                 "~/Scripts/AboutUs/jquery-2.1.3.js",
                 "~/Scripts/AboutUs/jquery.js",
                 "~/Scripts/AboutUs/jquery.datetimepicker.js",
                 "~/Scripts/AboutUs/jquery.backstretch.js",
                 "~/Scripts/AboutUs/bootstrap.js",
                 "~/Scripts/AboutUs/jasny.bootstrap.js",
                 "~/Scripts/AboutUs/animatescrolljs",
                 "~/Scripts/AboutUs/jquery.dotdotdot.js",
                 "~/Scripts/AboutUs/jquery.ui.widget.js",
                 "~/Scripts/AboutUs/tmpl.js",
                 "~/Scripts/AboutUs/load-image.all.js",
                 "~/Scripts/AboutUs/canvas-to-blob.js",
                 "~/Scripts/AboutUs/bootstrap(1).js",
                 "~/Scripts/AboutUs/jquery.blueimp-gallery.js",
                 "~/Scripts/AboutUs/jquery.iframe-transport.js",
                 "~/Scripts/AboutUs/jquery.fileupload.js",
                 "~/Scripts/AboutUs/jquery.fileupload-process.js",
                 "~/Scripts/AboutUs/jquery.fileupload-image.js",
                 "~/Scripts/AboutUs/jquery.fileupload-audio.js",
                 "~/Scripts/AboutUs/jquery.fileupload-video.js",
                 "~/Scripts/AboutUs/jquery.fileupload-validate.js",
                 "~/Scripts/AboutUs/jquery.fileupload-ui.js",
                 "~/Scripts/AboutUs/jquery.cookie.js",
                 "~/Scripts/AboutUs/all.js",
                 "~/Scripts/AboutUs/pfa.js",
                 "~/Scripts/AboutUs/main.js"));



            /* ADDPLACE BUNDLES */
            bundles.Add(new StyleBundle("~/Content/AddPlace/css").Include(
                "~/Content/AddPlace/places4all.css",
                "~/Content/AddPlace/jquery.datetimepicker.css"));
                

            bundles.Add(new ScriptBundle("~/Script/AddPlace/js").Include(
                "~/Scripts/AddPlace/analytics.js",
                "~/Scripts/AddPlace/recaptcha__pt_pt.js",
                 "~/Scripts/AddPlace/jquery-2.1.3.js",
                 "~/Scripts/AddPlace/jquery.js",
                 "~/Scripts/AddPlace/jquery.datetimepicker.js",
                 "~/Scripts/AddPlace/jquery.backstretch.js",
                 "~/Scripts/AddPlace/bootstrap.js",
                 "~/Scripts/AddPlace/jasny.bootstrap.js",
                 "~/Scripts/AddPlace/animatescrolljs",
                 "~/Scripts/AddPlace/jquery.dotdotdot.js",
                 "~/Scripts/AddPlace/jquery.ui.widget.js",
                 "~/Scripts/AddPlace/tmpl.js",
                 "~/Scripts/AddPlace/load-image.all.js",
                 "~/Scripts/AddPlace/canvas-to-blob.js",
                 "~/Scripts/AddPlace/bootstrap(1).js",
                 "~/Scripts/AddPlace/jquery.blueimp-gallery.js",
                 "~/Scripts/AddPlace/jquery.iframe-transport.js",
                 "~/Scripts/AddPlace/jquery.fileupload.js",
                 "~/Scripts/AddPlace/jquery.fileupload-process.js",
                 "~/Scripts/AddPlace/jquery.fileupload-image.js",
                 "~/Scripts/AddPlace/jquery.fileupload-audio.js",
                 "~/Scripts/AddPlace/jquery.fileupload-video.js",
                 "~/Scripts/AddPlace/jquery.fileupload-validate.js",
                 "~/Scripts/AddPlace/jquery.fileupload-ui.js",
                 "~/Scripts/AddPlace/jquery.cookie.js",
                 "~/Scripts/AddPlace/all.js",
                 "~/Scripts/AddPlace/pfa.js",
                 "~/Scripts/AddPlace/main.js"));



            /* HOWITWORKS BUNDLES */
            bundles.Add(new StyleBundle("~/Content/HowItWorks/css").Include(
                "~/Content/HowItWorks/places4all.css",
                "~/Content/HowItWorks/jquery.datetimepicker.css"));


            bundles.Add(new ScriptBundle("~/Script/HowItWorks/js").Include(
                "~/Scripts/HowItWorks/analytics.js",
                 "~/Scripts/HowItWorks/jquery-2.1.3.js",
                 "~/Scripts/HowItWorks/jquery.js",
                 "~/Scripts/HowItWorks/jquery.datetimepicker.js",
                 "~/Scripts/HowItWorks/jquery.backstretch.js",
                 "~/Scripts/HowItWorks/bootstrap.js",
                 "~/Scripts/HowItWorks/jasny.bootstrap.js",
                 "~/Scripts/HowItWorks/animatescrolljs",
                 "~/Scripts/HowItWorks/jquery.dotdotdot.js",
                 "~/Scripts/HowItWorks/jquery.ui.widget.js",
                 "~/Scripts/HowItWorks/tmpl.js",
                 "~/Scripts/HowItWorks/load-image.all.js",
                 "~/Scripts/HowItWorks/canvas-to-blob.js",
                 "~/Scripts/HowItWorks/bootstrap(1).js",
                 "~/Scripts/HowItWorks/jquery.blueimp-gallery.js",
                 "~/Scripts/HowItWorks/jquery.iframe-transport.js",
                 "~/Scripts/HowItWorks/jquery.fileupload.js",
                 "~/Scripts/HowItWorks/jquery.fileupload-process.js",
                 "~/Scripts/HowItWorks/jquery.fileupload-image.js",
                 "~/Scripts/HowItWorks/jquery.fileupload-audio.js",
                 "~/Scripts/HowItWorks/jquery.fileupload-video.js",
                 "~/Scripts/HowItWorks/jquery.fileupload-validate.js",
                 "~/Scripts/HowItWorks/jquery.fileupload-ui.js",
                 "~/Scripts/HowItWorks/jquery.cookie.js",
                 "~/Scripts/HowItWorks/all.js",
                 "~/Scripts/HowItWorks/pfa.js",
                 "~/Scripts/HowItWorks/main.js"));



            /* MYPROFILE BUNDLES */
            bundles.Add(new StyleBundle("~/Content/MyProfile/css").Include(
                "~/Content/MyProfile/places4all.css",
                "~/Content/MyProfile/jquery.datetimepicker.css"));


            bundles.Add(new ScriptBundle("~/Script/MyProfile/js").Include(
                "~/Scripts/MyProfile/analytics.js",
                 "~/Scripts/MyProfile/jquery-2.1.3.js",
                 "~/Scripts/MyProfile/jquery-1.11.0.js",
                 "~/Scripts/MyProfile/bootstrap.js",
                 "~/Scripts/MyProfile/jquery.confirm.js",
                 "~/Scripts/MyProfile/jquery.js",
                 "~/Scripts/MyProfile/jquery.datetimepicker.js",
                 "~/Scripts/MyProfile/jquery.backstretch.js",
                 "~/Scripts/MyProfile/jasny.bootstrap.js",
                 "~/Scripts/MyProfile/animatescrolljs",
                 "~/Scripts/MyProfile/jquery.dotdotdot.js",
                 "~/Scripts/MyProfile/jquery.ui.widget.js",
                 "~/Scripts/MyProfile/tmpl.js",
                 "~/Scripts/MyProfile/load-image.all.js",
                 "~/Scripts/MyProfile/canvas-to-blob.js",
                 "~/Scripts/MyProfile/bootstrap(1).js",
                 "~/Scripts/MyProfile/jquery.blueimp-gallery.js",
                 "~/Scripts/MyProfile/jquery.iframe-transport.js",
                 "~/Scripts/MyProfile/jquery.fileupload.js",
                 "~/Scripts/MyProfile/jquery.fileupload-process.js",
                 "~/Scripts/MyProfile/jquery.fileupload-image.js",
                 "~/Scripts/MyProfile/jquery.fileupload-audio.js",
                 "~/Scripts/MyProfile/jquery.fileupload-video.js",
                 "~/Scripts/MyProfile/jquery.fileupload-validate.js",
                 "~/Scripts/MyProfile/jquery.fileupload-ui.js",
                 "~/Scripts/MyProfile/jquery.cookie.js",
                 "~/Scripts/MyProfile/all.js",
                 "~/Scripts/MyProfile/pfa.js",
                 "~/Scripts/MyProfile/main.js"));


            /* REGISTER BUNDLES */
            bundles.Add(new StyleBundle("~/Content/Register/css").Include(
                "~/Content/Register/places4all.css",
                "~/Content/Register/jquery.datetimepicker.css"));


            bundles.Add(new ScriptBundle("~/Script/Register/js").Include(
                 "~/Scripts/Register/analytics.js",
                 "~/Scripts/Register/sdk.js",
                 "~/Scripts/Register/jquery-2.1.3.js",
                 "~/Scripts/Register/api.js",
                 "~/Scripts/Register/jquery.js",
                 "~/Scripts/Register/jquery.datetimepicker.js",
                 "~/Scripts/Register/jquery.backstretch.js",
                 "~/Scripts/Register/bootstrap.js",
                 "~/Scripts/Register/jasny.bootstrap.js",
                 "~/Scripts/Register/animatescrolljs",
                 "~/Scripts/Register/jquery.dotdotdot.js",
                 "~/Scripts/Register/jquery.ui.widget.js",
                 "~/Scripts/Register/tmpl.js",
                 "~/Scripts/Register/load-image.all.js",
                 "~/Scripts/Register/canvas-to-blob.js",
                 "~/Scripts/Register/bootstrap(1).js",
                 "~/Scripts/Register/jquery.blueimp-gallery.js",
                 "~/Scripts/Register/jquery.iframe-transport.js",
                 "~/Scripts/Register/jquery.fileupload.js",
                 "~/Scripts/Register/jquery.fileupload-process.js",
                 "~/Scripts/Register/jquery.fileupload-image.js",
                 "~/Scripts/Register/jquery.fileupload-audio.js",
                 "~/Scripts/Register/jquery.fileupload-video.js",
                 "~/Scripts/Register/jquery.fileupload-validate.js",
                 "~/Scripts/Register/jquery.fileupload-ui.js",
                 "~/Scripts/Register/jquery.cookie.js",
                 "~/Scripts/Register/all.js",
                 "~/Scripts/Register/pfa.js",
                 "~/Scripts/Register/main.js"));



        }
    }
}
