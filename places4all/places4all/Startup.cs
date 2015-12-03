using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(places4all.Startup))]
namespace places4all
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
