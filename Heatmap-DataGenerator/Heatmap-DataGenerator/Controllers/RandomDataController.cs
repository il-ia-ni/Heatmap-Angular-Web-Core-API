using Heatmap_DataGenerator.Services;
using Microsoft.AspNetCore.Mvc;

namespace Heatmap_DataGenerator.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RandomDataController : Controller
    {
        private IRandomDataService _dataService;

        public RandomDataController(IRandomDataService dataService)
        {
            this._dataService = dataService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Array>> GetRandomHeatmapData() {
            return Ok(_dataService.GetData());
        }
    }
}
