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
            return PartialView(_service.GetAccountMovement(id));
        }
    }
}
