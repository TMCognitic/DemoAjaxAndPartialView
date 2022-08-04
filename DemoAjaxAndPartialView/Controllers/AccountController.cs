using DemoAjaxAndPartialView.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoAjaxAndPartialView.Controllers
{
    public class AccountController : Controller
    {
        private readonly AccountService _service;

        public AccountController(AccountService service)
        {
            _service = service;
        }

        public IActionResult Index()
        {
            return View(_service.GetNumbers());
        }

        public IActionResult Movements(string id)
        {
            IEnumerable<int> movements = _service.GetAccountMovement(id);

            if (movements is null)
                return BadRequest();

            return PartialView(movements);
        }

        public IActionResult AddAmountQuery(string id, [FromQuery] int amount)
        {
            return _service.AddAmount(id, amount) ? Ok() : BadRequest();
        }

        [HttpPost]
        public IActionResult AddAmountBody(string id, [FromBody] AmountForm form)
        {
            return _service.AddAmount(id, form.Amount) ? Ok() : BadRequest();
        }
    }
}
