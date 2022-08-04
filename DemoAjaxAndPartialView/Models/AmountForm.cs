using System.ComponentModel.DataAnnotations;

namespace DemoAjaxAndPartialView.Models
{
    public class AmountForm
    {
        [Required]
        public int Amount { get; set; }
    }
}
