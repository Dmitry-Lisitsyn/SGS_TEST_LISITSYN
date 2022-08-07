using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Net;
using System.Net.Http;

namespace SGS_TEST_LISITSYN.Controllers
{

    [ApiController]
    public class CurrencyController : ControllerBase
    {

        private HttpClient client = new HttpClient();
        const string url = "https://www.cbr-xml-daily.ru/daily_json.js";

        private readonly ILogger<Currency> _logger;

        public CurrencyController(ILogger<Currency> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("currencies")]
        public async Task<ActionResult<List<Currency>>> Index()
        {
            string data = await client.GetStringAsync(url);

            JObject googleSearch = JObject.Parse(data);
            var results = googleSearch["Valute"].Children()
            .Children()
            .Select(i => i.ToObject<Currency>())
            .ToList();
            return Ok(results);
        }

        [HttpGet("{id}")]
        [Route("currencies/{id}")]
        public async Task<ActionResult<Currency>> GetByID(string id)
        {
            string data = await client.GetStringAsync(url);

            JObject googleSearch = JObject.Parse(data);
            var result = googleSearch["Valute"].Children()
            .Children()
            .Select(i => i.ToObject<Currency>())
            .Where(i => i.ID == id);
            var res = result.FirstOrDefault();
            return Ok(res);

        }

    }
}


