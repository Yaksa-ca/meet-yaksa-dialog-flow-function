using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;
using Umbraco.Headless.Client.Services;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net;
using System.Text;
using Umbraco.Headless.Client.Configuration;

namespace UmbracoFunction
{
    public static class Dialogflowulfillment
    {
        [FunctionName("YaksaFulfillment")]
        public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)]HttpRequest req, TraceWriter log)
        {
            string url = "<ALIAS>.umbraco.io";
            string userName = "<username>";
            string password = "<password>";

            string[] facts = 
                {
                "#name can run over a tank with his bicycle.",
                "#name appears in all star wars movies. He is the Force.",
                "When #name plays horse shoes the horse is still wearing them.",
                "#name once split a man in by giving him a wedgie.",
                "#name once shattered the space-time continuum. He felt so bad, he put it back together."
            };
            log.Info("C# HTTP trigger function processed a request.");
            HeadlessService headlessService = new HeadlessService(new HeadlessConfiguration(url, userName, password));

            var guid = Guid.Parse("bc84038723504616bc463ae70f1fd49e");
            var item = await headlessService.GetById(guid);
            var employeeName = item.Properties.Properties.Any(x => x.Alias.Equals("employeename", StringComparison.InvariantCultureIgnoreCase))
                ? (item.Properties.Properties.First(x => x.Alias.Equals("employeename", StringComparison.InvariantCultureIgnoreCase)).Value as Newtonsoft.Json.Linq.JValue)?.Value as string ?? item.Name
                : item.Name;

            Random random = new System.Random();
            int value = random.Next(0, 4); //returns integer of 0-4

            var myObj = new { fulfillmentText = facts[value].Replace("#name", employeeName) };
            var jsonToReturn = JsonConvert.SerializeObject(myObj); 

            return new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent(jsonToReturn, Encoding.UTF8, "application/json")
            };

            //string name = req.Query["name"];

            //string requestBody = new StreamReader(req.Body).ReadToEnd();
            //dynamic data = JsonConvert.DeserializeObject(requestBody);
            //name = name ?? data?.name;

            //return name != null
            //    ? (ActionResult)new OkObjectResult($"Hello, {name}")
            //    : new BadRequestObjectResult("Please pass a name on the query string or in the request body");
        }
    }
}
