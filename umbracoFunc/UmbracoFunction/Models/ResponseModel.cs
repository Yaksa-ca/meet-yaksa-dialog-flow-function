using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace UmbracoFunction.Models
{
    public class ResponseModel
    {
        [JsonProperty("fulfillmentText", NullValueHandling = NullValueHandling.Ignore)]
        public string fulfillmentText { get; set; }
    }
}
