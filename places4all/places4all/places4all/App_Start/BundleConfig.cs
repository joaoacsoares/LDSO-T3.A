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

        }
    }
}
