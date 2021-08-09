using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoAjaxAndPartialView.Models
{
    public class AccountService
    {
        private Dictionary<string, List<int>> _items;

        public AccountService()
        {
            _items = new Dictionary<string, List<int>>();
            _items.Add("0001", new List<int>() { 100, -50, 100, -50 });
            _items.Add("0002", new List<int>() { 200, -100, 100, -50 });
        }

        public IEnumerable<string> GetNumbers()
        {
            return _items.Keys;
        }

        public IEnumerable<int> GetAccountMovement(string key)
        {            
            _items.TryGetValue(key, out List<int> movements);
            return movements;
        }
    }
}
